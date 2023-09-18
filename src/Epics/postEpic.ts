import axios from "axios"
import { Observable, of, from } from "rxjs"
import { filter, debounceTime, map, mergeMap, takeUntil, catchError } from "rxjs/operators"
import { RootAction, RootState } from "../type"
import { postDetails, postedDetails,Error } from "../redux/postSlice"
import { StateObservable } from "redux-observable"
async function postData() {
    const postdetails = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            userId: "09089897",
            title: "raman saini",
            body: "lorem njkdwa jbdkjwe dqwejfjqwenf qwenfqwenf  qwejf wqkenf w ejfnek nqv nnc j"

        },
        {
            headers: {
                "content-type": "application/json"
            }
        }
    )
    return postdetails.data

}
export const postdata = (actions$: Observable<RootAction>, state$: StateObservable<RootState>) =>
    actions$.pipe(
        filter(postedDetails.match),
        debounceTime(500),
        mergeMap(() => {

            return from(postData()).pipe(
                
                map((res: Record<string, string>) => {
                    return postDetails(res);
                }),
                takeUntil(actions$.pipe(filter(postedDetails.match))),
                catchError((error)=>{
                    return of(Error(error.message))
                })
            )


        })
    )



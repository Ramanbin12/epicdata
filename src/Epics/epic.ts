import axios from "axios"
import {setTitle,setData,errorFetchedData} from "../redux/slices"
import { Observable,of, from} from 'rxjs';
import {filter,debounceTime,catchError,takeUntil, mergeMap,map} from "rxjs/operators"
import { StateObservable } from "redux-observable";
import { RootAction, RootState } from "../type";
async function getData(){
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
}
export const getDataEpic=(action$: Observable<RootAction> ,state$: StateObservable<RootState>)=>
    action$.pipe(
        filter(setTitle.match),
        debounceTime(500),
        mergeMap(()=>{
            return from(getData()).pipe(
                map((res:Record<string,string>)=>{
                    return setData(res);
                }),
                takeUntil(action$.pipe(filter(setTitle.match))),
                catchError((error)=>{
                    return of(errorFetchedData(error.message))
                })
            )
        })
    )

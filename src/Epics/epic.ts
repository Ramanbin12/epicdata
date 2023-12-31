import axios from "axios"
import {setTitle,setData} from "../redux/slices"
import { Observable, from, of } from 'rxjs';
import {filter,debounceTime, mergeMap,map} from "rxjs/operators"
import { StateObservable } from "redux-observable";
import { RootAction, RootState } from "../type";
async function getData(){
    console.log('------------------');
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
                    console.log(res);
                    return setData(res);
                })
            )
        })
    )

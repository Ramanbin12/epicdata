import { createSlice } from "@reduxjs/toolkit";
const initialState={
    loading:false,
    title:[],
    error:""
}
const dataSlices=createSlice({
    name:"data",
    initialState,
    reducers:{
        setTitle:(state,action)=> { 
            state.loading=true;
            } ,
        setData:(state,action)=>{
            console.log("pyload",action.payload);
            state.loading=false;
            state.title=action.payload
            state.error=""
            console.log("state data",state.title)
        },
        errorFetchedData:(state,action)=>{
            state.error=action.payload;
            state.loading=false
            state.title=[]
        }
        }
})
export const {setTitle,errorFetchedData ,setData} =dataSlices.actions;
export default dataSlices.reducer;
export type DataActions = ReturnType<typeof setTitle>  | ReturnType<typeof setData>;
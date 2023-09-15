import { createSlice } from "@reduxjs/toolkit";
const initialState={
    title:[]
}
const dataSlices=createSlice({
    name:"data",
    initialState,
    reducers:{
        setTitle:(state,action)=> { state.title = action.payload} ,
        setData:(state,action)=>{
            console.log("pyload",action.payload)
            state.title=action.payload
            console.log("state data",state.title)
        },
        setExample:() => {},
    }
})
export const {setTitle, setExample,setData} =dataSlices.actions;
export default dataSlices.reducer;
export type DataActions = ReturnType<typeof setTitle>  | ReturnType<typeof setExample>;
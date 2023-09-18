import {createSlice} from "@reduxjs/toolkit";
const initialState={
    loading:false,
    data:[],
    error:""
}

const postSlice=createSlice({
name:"post",
initialState,
reducers:{
    postedDetails:(state,action)=>{
        state.loading=true;
    },
    postDetails:(state,action)=>{
        state.loading=false
        state.error=""
        state.data=action.payload;
    },
    Error:(state,action)=>{
        state.loading=false
        state.error=action.payload
        state.data=[]
    }

}
})


export const {postDetails,postedDetails,Error}=postSlice.actions
export default postSlice.reducer
export type postActions= ReturnType<typeof postedDetails>|ReturnType<typeof postDetails> | ReturnType<typeof Error>
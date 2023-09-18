import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { RootEpics } from "../Epics/rootEpic";
import dataSlices from "./slices"
import { RootAction, RootState } from "../type";
import postSlice from "./postSlice";


const epicMiddleware = createEpicMiddleware<RootAction, RootAction,RootState>()
export const store = configureStore({
    reducer: {
        data: dataSlices,
        post:postSlice
    },
    middleware: [epicMiddleware],

})

epicMiddleware.run(RootEpics)

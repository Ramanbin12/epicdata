import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { RootEpics } from "../Epics/rootEpic";
import dataSlices from "./slices"
import { RootAction, RootState } from "../type";


const epicMiddleware = createEpicMiddleware<RootAction, RootAction,RootState>()
export const store = configureStore({
    reducer: {
        data: dataSlices,
    },
    middleware: [epicMiddleware],

})

epicMiddleware.run(RootEpics)

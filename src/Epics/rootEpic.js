import {combineEpics} from "redux-observable"
import {getDataEpic} from "./epic"
const epics=[getDataEpic];
export const RootEpics= combineEpics(...epics);
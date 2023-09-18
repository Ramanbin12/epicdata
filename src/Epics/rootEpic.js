import {combineEpics} from "redux-observable"
import {getDataEpic} from "./epic"
import { postdata } from "./postEpic";
const epics=[getDataEpic,postdata];
export const RootEpics= combineEpics(...epics)
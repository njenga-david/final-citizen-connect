import { AuthInterface } from "./Reducers/authReducer";
import { ViewInterface } from "./Reducers/viewsReducer";

export interface AppState{
    auth:AuthInterface
    view:ViewInterface


}
import { createReducer, on } from "@ngrx/store"
import { IView, View } from "../../Models/Views"


import { ViewActions } from "../Actions/views.action"

export interface ViewInterface {

    id: string

    allViews: View[],
    allViewsError: string,
    allViewsLoading: boolean,

    addSuccessMessage: string,
    addErrorMessage: string,
    addLoading: boolean,

}

export const initialState: ViewInterface = {

    id: "",

    addSuccessMessage: '',
    addErrorMessage: '',
    addLoading: false,

    allViews: [],
    allViewsError: '',
    allViewsLoading: false,

}

export const viewReducer = createReducer(
    initialState,
    //for add view
    on(ViewActions.addView, (state) => {
        return {
            ...state,
            addSuccessMessage: '',
            addErrorMessage: '',
            addLoading: true,
        }
    }),
    on(ViewActions.addViewSuccess, (state, { response }) => {
        return {
            ...state,
            addSuccessMessage: response.message,
            addErrorMessage: '',
            addLoading: false,
        }
    }),
    on(ViewActions.addViewFailure, (state, { message }) => {
        return {
            ...state,
            addSuccessMessage: '',
            addErrorMessage: message,
            addLoading: false,
        }
    }),

    
    //for get views
    on(ViewActions.get, (state) => {
        return {
            ...state,
            allViews: [],
            allViewsError: '',
            allViewsLoading: true,
        }
    }),
    on(ViewActions.getViewSuccess, (state, { response }) => {
        return {
            ...state,
            allViews: response, 
            allViewsLoading: false,
        }
    }),
    on(ViewActions.getViewFailure, (state, { message }) => {
        return {
            ...state,
            allViews: [],
            allViewsError: message,
            allViewsLoading: false,
        }
    })
)
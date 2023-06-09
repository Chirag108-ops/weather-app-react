import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
    name : 'info',
    initialState : {
        location : 'Delhi',
        data : {},
        errorMsg : '',
        loading : false
    },
    reducers : {
        addData : (state,action) => {
            state.data = action.payload
        },
        addLocation : (state,action) => {
            state.location = action.payload
        },
        addError : (state,action) => {
            state.errorMsg = action.payload
        },
        addLoading : (state, action) => {
            state.loading = action.payload
        }
    }
})
export const {addData, addLocation, addError, addLoading}  = AppSlice.actions
export default AppSlice.reducer
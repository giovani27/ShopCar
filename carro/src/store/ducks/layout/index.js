import {createAction,createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    messages: []
}


export const addMessages = createAction('ADD_MESSAGE')
export const RemoveMessages = createAction('REMOVE_MESSAGE')



export default createReducer(INITIAL_STATE,{
    [addMessages.type]: (state, action) => ({...state, messages: [...state.messages, action.payload]}),
    [RemoveMessages.type]: (state, action) => ({...state, messages:
         state.messages.filter(mg => mg !== action.payload)})


})








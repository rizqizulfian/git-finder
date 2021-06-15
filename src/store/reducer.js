import { combineReducers } from 'redux'
import { SET_USER, SET_REPOSITORIES, SET_LOADING, SET_ERROR } from './const'

const initialState = {
    user: '',
    repositories: [],
    isLoading: false,
    error: false
}

function github(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SET_USER:
            return { ...state, user: payload }
        case SET_REPOSITORIES:
            return { ...state, repositories: [...payload] }
        case SET_LOADING:
            return {...state, isLoading: payload}
        case SET_ERROR:
            return {...state, error: payload}
        default:
            return state
    }
}

const reducer = combineReducers({
    github
})

export default reducer
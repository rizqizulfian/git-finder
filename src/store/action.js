import { SET_USER, SET_REPOSITORIES, SET_LOADING, SET_ERROR } from './const'

export function setUser(payload) {
    return { type: SET_USER, payload}
}

export function setRepositories(payload) {
    return { type: SET_REPOSITORIES, payload}
}

export function setLoading(payload) {
    return { type: SET_LOADING, payload }
}

export function setError(payload) {
    return { type: SET_ERROR, payload}
}

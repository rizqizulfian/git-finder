import { SET_USER, SET_REPOSITORIES, SET_LOADING, SET_ERROR } from './const'
// fetch github api using octokit for gain more rate limit with auth octokit
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({auth: "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"})

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

export function fetchUser(payload) {
    return async (dispatch) => {
        try {
            dispatch(setError(false))
            dispatch(setLoading(true))
            const data = await octokit.request(`GET /users/${payload}`)
            dispatch(setUser( data.data ))
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setError(error))
            dispatch(setLoading(false))
        }
    }
}

export function fetchRepositories(payload) {
    return async (dispatch) => {
        try {
            dispatch(setError(false))
            dispatch(setLoading(true))
            const data = await octokit.request(`GET /users/${payload}/repos`)
            dispatch(setRepositories( data.data ))
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setError(error))
            dispatch(setLoading(false))
        }
    }
}
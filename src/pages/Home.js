import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser, fetchRepositories } from '../store/action'
import Card from '../components/Card/Card'
import Repositories from '../components/Repositories/Repositories'
import Error from '../components/Error/Error'

function Home() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const loading = useSelector(state => state.github.loading)
    const error = useSelector(state => state.github.error)
    const user = useSelector(state => state.github.user)
    const repositories = useSelector(state => state.github.repositories)

    const submitHandler = async e => {
        e.preventDefault()
        dispatch(fetchUser(username))
        dispatch(fetchRepositories(username))
        setUsername('')
    }

    const textHandler = e => {
        setUsername(e.target.value)
    }

    if (loading) return <div>Loading</div>
    else {
        return (
            <>
                <div className="flex flex-col justify-center items-center ">
                    <div className="w-screen px-16 pb-12 bg-gradient-to-r from-green-400 to-blue-500">
                        <div className="flex justify-center pt-10" >
                            <div className="animate-pulse text-2xl text-gray-800 md:text-3xl font-semibold">Git Searchers</div>
                        </div>

                        <div className="flex justify-center pt-12 sm:pt-12 md:pt-20">
                            <form onSubmit={submitHandler}>
                                <div className="flex space-x-4 w-auto">
                                    <input type="text" value={username} onChange={textHandler} className="animate-pulse border border-transparent w-52 md:w-60 border-0 rounded-md p-2" placeholder="input username" />
                                    <button type="submit" className="animate-pulse bg-pink-600 rounded w-28 md:w-32 text-white">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {
                        error ? <Error data={error} />
                            : <div className="flex justify-center items-center">
                                <div className="px-16 pb-16">
                                    <div className="flex justify-center pt-10">
                                        <div className="grid grid-cols-3 auto-rows-max gap-4 overflow-auto">
                                            {
                                                repositories && repositories.map((item) => {
                                                    return <Repositories key={item.id} data={item} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-32">
                                    {
                                        user ? <Card user={user} /> : ''
                                    }
                                </div>
                            </div>
                    }
                </div>
            </>
        )
    }

}

export default Home
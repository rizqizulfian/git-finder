function Error(props) {

    return (
        <div className="flex flex-col items-center justify-center mt-20 ">
            <span className="bg-yellow-500 rounded text-white p-2">Oops, Sorry Something Went Wrong</span>
            <span className="mt-5 bg-yellow-500 rounded text-white p-2">{props.data.response.data.message}</span>
        </div>
    )
}

export default Error
function Repositories(props) {
    return (
        <a href={props.data.html_url}>
            <div className='flex items-center space-x-2 p-2 border rounded-lg hover:bg-blue-200 transition-colors w-60 duration-500 border-blue-600'>
                <div className="truncate justify-center">
                    <span className=" text-gray-800">{props.data.name}</span>
                </div>
            </div>
        </a>
    )
}

export default Repositories
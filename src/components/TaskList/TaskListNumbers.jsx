const TaskListNumbers = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-5 py-5" >
            <div className="flex flex-col items-start font-bold justify-center  bg-blue-400 w-[45%] px-8 py-5 rounded-lg text-2xl">
                <h1>0</h1>
                <h1>New Task</h1>
            </div>
            <div className="flex flex-col items-start font-bold justify-center  bg-green-400 w-[45%] px-8 py-5 rounded-lg text-2xl">
                <h1>0</h1>
                <h1>New Task</h1>
            </div>
            <div className="flex flex-col items-start font-bold justify-center  bg-yellow-400 w-[45%] px-8 py-5 rounded-lg text-2xl">
                <h1>0</h1>
                <h1>New Task</h1>
            </div>
            <div className="flex flex-col items-start font-bold justify-center  bg-red-400 w-[45%] px-8 py-5 rounded-lg text-2xl">
                <h1>0</h1>
                <h1>New Task</h1>
            </div>
        </div>
    )
}

export default TaskListNumbers
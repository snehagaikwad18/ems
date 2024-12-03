import { useState } from 'react'
import AllTask from './AllTask'

const CreateTask = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        assignTo: "",
        category: ""
    })
    return (
        <div className="w-full py-5">
            <form action="" className="flex flex-row w-full gap-16 justify-between  items-start ">
                <div className=" w-1/2 flex flex-col gap-5 justify-start items-center   ">
                    <div className="flex flex-col items-start justify-center w-full">
                        <label htmlFor="">Task Title</label>
                        <input type="text" placeholder="Make a ui design" className="bg-[#1c1c1c] border-[1px] px-2 py-2 rounded-md border-white w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                        <label htmlFor="">Date</label>
                        <input type="date" placeholder="Make a ui design" className="bg-[#1c1c1c] border-[1px] px-2 py-2 rounded-md border-white w-full" />
                    </div>

                    <div className="flex flex-col items-start justify-center w-full">
                        <label htmlFor="">Assign to</label>
                        <input type="text" placeholder="Make a ui design" className="bg-[#1c1c1c] border-[1px] px-2 py-2 rounded-md border-white w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full">
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder="Design development etc" className="bg-[#1c1c1c] border-[1px] px-2 py-2 rounded-md border-white w-full" />
                    </div>
                </div>

                <div className="w-1/2  flex flex-col items-start justify-start  ">
                    <label htmlFor="">Description</label>
                    <textarea rows="9" name="" id="" placeholder="Detailed description of task (Max 500 word)" className="resize-none bg-[#1c1c1c] w-full rounded-md placeholder:text-white placeholder:text-sm border-[1px] border-white px-3 py-3"  ></textarea>
                    <button className="w-full py-3 rounded-md bg-green-500 font-bold mt-3 ">Create Task</button>
                </div>

            </form>
            <AllTask />
        </div>
    )
}

export default CreateTask
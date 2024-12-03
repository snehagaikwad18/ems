import { useState } from "react"

const Login = ({handleLogin}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    }
    )
    const submitForm = (e) => {
        e.preventDefault()
        console.log(formData)
        handleLogin(formData.email, formData.password)
        setFormData({
            email: "",
            password: ""
        })
    }

    const handleInpuntChange = (e) => {
        setFormData((prevData) => ({
            ...prevData, [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="bg-[#1c1c1c] w-screen h-screen flex justify-center items-center ">
            <div className="border-green-500 w-[500px] h-[500px] border-[2px]  flex flex-col items-center justify-center">
                <form
                    onSubmit={submitForm}
                    className="flex flex-col gap-5 items-center justify-center">

                    <input type="email" required name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInpuntChange}
                        className="border-[3px] border-green-500 rounded-md px-5 py-2 bg-[#1c1c1c] text-white"
                    />
                    <input type="password" required name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleInpuntChange}
                        className="border-[3px] border-green-500 rounded-md px-5 py-2 bg-[#1c1c1c] text-white"
                    />
                    {/* <span > <input type="checkbox" />Remeber me </span>
                    <p className="text-orange-600">forgot password</p> */}

                    <button className="bg-green-500 rounded-md px-5 py-2 text-white font-bold w-full " >Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
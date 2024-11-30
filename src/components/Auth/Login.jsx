import { useState } from "react"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    }
    )
    const submitForm = (e) => {
        e.preventDefault()
        console.log(formData)
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
        <div>
            <div className="border-blue-600 border-[5px]  flex flex-col items-center justify-center">
                <form
                    onSubmit={submitForm}
                    className="flex flex-col gap-5 items-center justify-center">

                    <input type="email" required name="email"
                        placeholder="enter your email"
                        value={formData.email}
                        onChange={handleInpuntChange}
                    />
                    <input type="password" required name="password"
                        placeholder="enterpassword"
                        value={formData.password}
                        onChange={handleInpuntChange}
                    />
                    {/* <span > <input type="checkbox" />Remeber me </span>
                    <p className="text-orange-600">forgot password</p> */}

                    <button>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
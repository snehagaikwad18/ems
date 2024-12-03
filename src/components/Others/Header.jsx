import { useNavigation } from "react-router-dom"

const Header = () => {
    // const useNavigate = useNavigation()

    // const Logout = () => {
    //     console.log("logout")
    //     localStorage.clear()
    //     // useNavigate("/")
    // }
    return (
        <div className='flex flex-row flex-1 items-center justify-between  text-white'>
            <h1 className="font-bold text-2xl">Hello <br /> <span className="font-bold text-3xl" >sneha👋</span></h1>
            <button
                // onClick={Logout}
                className="bg-red-600 font-bold p-2 rounded-md px-5 text-center"
            >Log Out</button>
        </div>
    )
}

export default Header
import { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const { employeeData, adminData } = getLocalStorage()

    useEffect(() => {
        setData({ employeeData, adminData })
    }, [])
    return (
        <div>
            <AuthContext.Provider value={data} >
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
import { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData && authData.employeeData, "this is our all data")

  const handleLogin = (email, password) => {
    if (authData) {
      if (authData.employeeData.find((e) => e.email == email && e.password == password)) {
        setUser('employee')
      } else if (authData.adminData.find((e) => e.email == email && e.password == password)) {
        setUser('admin')
      } else {
        alert("invalid user")
      }
    }
  }

  useEffect(() => {
    // setLocalStorage()
    user && localStorage.setItem('user', user)
  }, [user])




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}

    </>
  )
}
export default App

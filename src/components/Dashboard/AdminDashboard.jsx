import CreateTask from "../Others/CreateTask"
import Header from "../Others/Header"
const AdminDashboard = () => {
  return (
    <div className="bg-[#1c1c1c] h-screen p-10 text-white" >
      <Header />
      <CreateTask />
    </div>
  )
}

export default AdminDashboard
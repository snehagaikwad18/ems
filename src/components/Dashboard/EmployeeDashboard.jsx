import Header from '../Others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../TaskList/TaskListNumbers'

const EmployeeDashboard = () => {
    return (
        <div className='p-10 bg-[#1c1c1c] text-white' >
            <Header />
            <TaskListNumbers />
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard
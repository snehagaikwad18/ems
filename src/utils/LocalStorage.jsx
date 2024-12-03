const employees = [
  {
    id: 1,
    email: "emp1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Bugs in Module A",
        taskDescription: "Resolve all critical bugs in Module A reported by QA team.",
        taskDate: "2024-12-05",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review for Feature Y",
        taskDescription: "Review the code submitted by the team and provide feedback.",
        taskDate: "2024-12-01",
        category: "Review"
      }
    ]
  },
  {
    id: 2,
    email: "emp2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Feature X",
        taskDescription: "Complete the implementation of Feature X as per the design.",
        taskDate: "2024-11-30",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    email: "emp3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests for Module B",
        taskDescription: "Ensure 100% test coverage for Module B using Jest.",
        taskDate: "2024-12-10",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    email: "emp4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application to Staging",
        taskDescription: "Fix deployment pipeline errors and deploy the app to the staging environment.",
        taskDate: "2024-12-03",
        category: "Deployment"
      }
    ]
  },
  {
    id: 5,
    email: "emp5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Project Documentation",
        taskDescription: "Compile all project documents into a structured format for handoff.",
        taskDate: "2024-12-15",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Organize Team Meeting",
        taskDescription: "Schedule and organize the weekly team meeting to discuss project progress.",
        taskDate: "2024-11-28",
        category: "Management"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  },

]

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem('employee'))
  const adminData = JSON.parse(localStorage.getItem('admin'))
  return { employeeData, adminData }
}
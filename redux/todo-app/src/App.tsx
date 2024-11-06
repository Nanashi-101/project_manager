import React from "react"
import AddTask from "./components/addTodoTask"
import AllTodos from "./components/allTodos"
import CompletedTodoList from "./components/completedTodoList"
import EditTodoModal from "./components/editTodoModal"
import Header from "./components/header"
import Navigation from "./components/Navigation"
import TodoList from "./components/todoList"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserAuthentication from "./components/UserAuth"

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <React.Fragment>
        <Header headerText={"Todo - Manager"}/>
        <UserAuthentication />
        {/* <AddTask />
        <Navigation /> */}
      </React.Fragment>
    )
  },
  {
    path: '/all',
    element: (
      <React.Fragment>
        <Header headerText={"Todo - Manager"}/>
        <AddTask />
        <Navigation />
        <AllTodos/>
        <EditTodoModal />
      </React.Fragment>
    )
  },
  {
    path: '/active',
    element: (
      <React.Fragment>
        <Header headerText={"Todo - Manager"}/>
        <AddTask />
        <Navigation />
        <TodoList/>
        <EditTodoModal />
      </React.Fragment>
    )
  },
  {
    path: '/completed',
    element: (
      <React.Fragment>
        <Header headerText={"Todo - Manager"}/>
        <AddTask />
        <Navigation />
        <CompletedTodoList/>
        <EditTodoModal />
      </React.Fragment>
    )
  },
])

function App() {
  return (
    <div className="relative max-w-full mx-auto">
      <div className="w-full h-screen my-50">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App

import AddTask from "./components/addTodoTask"
import EditTodoModal from "./components/editTodoModal"
import Header from "./components/header"
import TodoList from "./components/todoList"


function App() {
  return (
    <div className="relative max-w-[1240px] mx-auto">
      <div className="w-full h-screen my-50">
        <Header headerText={"Todo - Manager"}/>
        <AddTask />
        <TodoList />
        <EditTodoModal />
      </div>
    </div>
  )
}

export default App

/* eslint-disable react-refresh/only-export-components */
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import toast from "react-hot-toast";

const AddTask: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {

    if(!todo || !text) return toast.error("Please fill all the fields");

    dispatch(addTodo({
      id: Math.floor(Math.random() * 1000),
      task: todo,
      text: text,
      completed: isCompleted
    }));

    toast.success("Task added successfully");

    setTodo("");
    setText("");
    setIsCompleted(false);
  }

  return (
    <div className='flex flex-col max-w-[1240px] mx-auto items-center justify-center gap-5'>
      <div className="flex flex-col gap-5 w-full items-center justify-center">
        <div className="flex flex-col relative w-[20rem]">
          <input type="text" className="placeholder:font-semibold text border border-black px-5 py-3 rounded-[0.225rem] w-full" value={todo} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTodo(e.target.value);
          }} id="task" placeholder="Enter your task" />
        </div>
        <div className="flex flex-col relative w-[20rem] h-[10rem]">
          <textarea className="placeholder:font-semibold text border border-black px-5 py-3 rounded-[0.225rem] w-full h-full" value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setText(e.target.value);
          }} id="time" placeholder="Description" />
        </div>
      </div>
      <div className="flex gap-5">
        <button className='px-5 py-3 rounded-xl capitalize bg-blue-500 text-white font-bold text-xl hover:scale-105 transition-all' onClick={handleAddTask}>add task</button>
      </div>
    </div>
  )
}

export default AddTask;

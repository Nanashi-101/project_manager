/* eslint-disable react-refresh/only-export-components */
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer";

const AddTask: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {

    dispatch(addTodo({
      id: Math.floor(Math.random() * 1000),
      task: todo,
      time: time,
      completed: isCompleted
    }));

    setTodo("");
    setTime("");
    setIsCompleted(false);
  }

  window.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.key === 'Enter' && handleAddTask();
  });
  return (
    <div className='flex flex-col max-w-[1240px] mx-auto items-center justify-center gap-5'>
      <div className="flex flex-col gap-5 w-full items-center justify-center">
        <div className="flex flex-col relative w-[20rem]">
          <input type="text" className="peer placeholder-transparent text border border-black px-5 py-3 rounded-[0.225rem] w-full" value={todo} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTodo(e.target.value);
          }} id="task" placeholder="Enter your task"/>
          <label htmlFor="task" className="absolute left-[1.5rem] top-[.75rem] text-[1.07rem] hidden peer-placeholder-shown:block peer-placeholder-shown:text-gray-500/70 peer-placeholder-shown:font-bold ">Enter your task</label>
        </div>
        <div className="flex flex-col relative w-[20rem]">
          <input type="text" className="peer placeholder-transparent text border border-black px-5 py-3 rounded-[0.225rem] w-full" value={time} onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTime(e.target.value);
          }} id="time" placeholder="Enter your task"/>
          <label htmlFor="time" className="absolute left-[1.5rem] top-[.75rem] text-[1.07rem] hidden peer-placeholder-shown:block peer-placeholder-shown:text-gray-500/70 peer-placeholder-shown:font-bold ">Enter your time</label>
        </div>
      </div>
      <div className="flex gap-5">
        <button className='px-5 py-3 rounded-xl capitalize bg-blue-500 text-white font-bold text-xl hover:scale-105 transition-all' onClick={handleAddTask}>add task</button>
      </div>
    </div>
  )
}

export default AddTask;

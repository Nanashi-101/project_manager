import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { completeTodo, removeTodo } from '../redux/todoSlice';
import Header from './header';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdEditNote } from 'react-icons/md';
import { openModal } from '../redux/modalSlice';

type DeleteTodo = {
    id: number,
    task: string,
    text: string,
    completed: boolean
}

const AllTodos = () => {
    const completedTodoState = useSelector((state: RootState) => state.todoState.completedTodos);
    const activeTodoState = useSelector((state: RootState) => state.todoState.todos);
    const allTodoState = [...activeTodoState, ...completedTodoState];
    const dispatch = useDispatch();

    const handleDelete = (reqTodo: DeleteTodo) => {
        dispatch(removeTodo(reqTodo))
    }

    return (
        <React.Fragment>
            <Header headerText={"All Todos"} />
            <div className='flex flex-wrap max-w-[1000px] mx-auto my-24'>
                {
                    (allTodoState.length === 0) 
                    ? <h1 className='text-5xl font-bold text-gray-500/70'>No tasks yet</h1> 
                    : allTodoState.map((todo) => (
                        <div key={todo.id} className='relative mb-10 flex flex-col gap-5 w-[20rem] mx-auto border border-gray-500 p-5 rounded-lg bg-black text-white shadow-3xl backdrop:blur-sm'>
                            <div className='flex flex-col gap-5 text-left items-start justify-center'>
                                <h1 className='text-2xl font-semibold'>{todo.task}</h1>
                                <p className='text-lg font-normal'>{todo.text}</p>
                            </div>
                            {!todo.completed?<div className='flex items-center justify-center mt-10 gap-5'>
                                <button className='group flex gap-1 hover:bg-white hover:text-black  px-3 py-1 rounded-md capitalize text-white font-semibold text-xl hover:scale-105 transition-all' onClick={() => dispatch(openModal(todo))}><MdEditNote size={35} className=' group-hover:text-blue-600 transition-all' /></button>
                                <button className='group flex gap-1 hover:bg-white hover:text-black  px-3 py-1 rounded-md capitalize text-white font-semibold text-xl hover:scale-105 transition-all' onClick={() => dispatch(completeTodo(todo))}><IoCheckmarkDoneSharp size={30} className=' group-hover:text-green-600 transition-all' /></button>
                            </div>:null}
                            <button className='absolute top-5 right-5 group p-1 bg-white rounded-full hover:scale-105 hover:bg-red-600 transition-all' onClick={() => handleDelete(todo)}><IoMdClose size={20} className='text-black group-hover:text-white group-hover:scale-105 transition-all' /></button>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default AllTodos

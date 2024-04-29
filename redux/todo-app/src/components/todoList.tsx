import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeTodo } from '../redux/todoSlice';
import Header from './header';
import React from 'react';
import { MdEditNote } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { openModal } from '../redux/modalSlice';

type DeleteTodo = {
    id: number,
    task: string,
    text: string,
    completed: boolean
}

const TodoList = () => {
    const todoState = useSelector((state: RootState) => state.todoState.todos);
    const dispatch = useDispatch();

    const handleDelete = (reqTodo: DeleteTodo) => {
        dispatch(removeTodo(reqTodo))
    }

    return (
        <React.Fragment>
            <Header headerText={"Todo List"} />
            <div className='flex gap-5 flex-wrap max-w-[1240px] mx-auto my-24'>
                {
                    todoState.map((todo) => (
                        <div key={todo.id} className='flex flex-col gap-5 w-[20rem] mx-auto items-center justify-start border border-gray-500 p-5 rounded-lg bg-black text-white shadow-xl backdrop:blur-sm'>
                            <div>
                                <div className='flex gap-5'>
                                    <h1 className='text-2xl font-semibold'>Title:</h1>
                                    <p className='text-lg font-normal'>{todo.task}</p>
                                </div>
                                <div className='flex gap-5'>
                                    <h1 className='text-2xl font-semibold'>Time:</h1>
                                    <p className='text-lg font-normal'>{todo.text}</p>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <button className='px-5 py-3 rounded-full capitalize text-white font-bold text-xl hover:scale-105 transition-all' onClick={() => dispatch(openModal())}><MdEditNote size={30} className='text-white hover:text-blue-600 transition-all' /></button>
                                <button className='px-5 py-3 rounded-full capitalize text-white font-bold text-xl hover:scale-105 transition-all' onClick={() => handleDelete(todo)}><IoIosCloseCircle size={30} className='text-white hover:text-red-600 transition-all' /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default TodoList

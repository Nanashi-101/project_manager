import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeTodo } from '../redux/todoSlice';
import Header from './header';

type DeleteTodo = {
    id: number,
    task: string,
    text: string,
    completed: boolean
}

const CompletedTodoList = () => {
    const todoState = useSelector((state: RootState) => state.todoState.completedTodos);
    const dispatch = useDispatch();

    const handleDelete = (reqTodo: DeleteTodo) => {
        dispatch(removeTodo(reqTodo))
    }

    return (
        <React.Fragment>
            <Header headerText={"Completed Tasks"} />
            <div className='flex flex-wrap max-w-[1000px] mx-auto my-24'>
                {
                    (todoState.length === 0) 
                    ? <h1 className='text-5xl font-bold text-gray-500/70'>No tasks completed yet</h1> 
                    : todoState.map((todo) => (
                        <div key={todo.id} className='relative mb-10 flex flex-col gap-5 w-[20rem] mx-auto border border-gray-500 p-5 rounded-lg bg-black text-white shadow-3xl backdrop:blur-sm'>
                            <div className='flex flex-col gap-5 text-left items-start justify-center'>
                                <h1 className='text-2xl font-semibold'>{todo.task}</h1>
                                <p className='text-lg font-normal'>{todo.text}</p>
                            </div>
                            <button className='absolute top-5 right-5 group p-1 bg-white rounded-full hover:scale-105 hover:bg-red-600 transition-all' onClick={() => handleDelete(todo)}><IoMdClose size={20} className='text-black group-hover:text-white group-hover:scale-105 transition-all' /></button>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default CompletedTodoList

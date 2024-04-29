import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeTodo } from '../redux/reducer';
import Header from './header';
import React from 'react';

type DeleteTodo = {
    id: number,
    task: string,
    time: string,
    completed: boolean
}

const TodoList = () => {
    const todoState = useSelector((state: RootState) => state.todos);
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
                        <div key={todo.id} className='flex flex-col gap-5 w-[20rem] items-center justify-start border border-gray-500 p-5 rounded-lg'>
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-2xl font-semibold'>{todo.task}</h1>
                                <p className='text-lg font-normal'>{todo.time}</p>
                            </div>
                            <div className='flex gap-5'>
                                <button className='px-5 py-3 rounded-xl capitalize bg-blue-500 text-white font-bold text-xl hover:scale-105 transition-all'>edit</button>
                                <button className='px-5 py-3 rounded-xl capitalize bg-blue-500 text-white font-bold text-xl hover:scale-105 transition-all' onClick={() => handleDelete(todo)}>delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default TodoList

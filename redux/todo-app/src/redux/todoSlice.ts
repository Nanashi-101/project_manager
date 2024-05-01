import { createSlice } from "@reduxjs/toolkit";

// The state of the slice is defined as an interface for type safety
type todo = {
    id: number,
    task: string,
    text: string,
    completed: boolean
}

interface todoSliceState {
    todos: todo[];
    completedTodos: todo[];
}

// The initial state of the slice is defined as an object
const initialState: todoSliceState = {
    todos: [],
    completedTodos: []
}

// The slice is created using the createSlice function
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        task: action.payload.task,
                        text: action.payload.text,
                        completed: action.payload.completed
                    }
                }
                return todo;
            })
        },
        completeTodo: (state, action) => {
            let finishedTodo = {};
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    finishedTodo = {
                        ...todo,
                        completed: !todo.completed
                    }
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
            state.completedTodos.push(finishedTodo as todo);
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    }
});

export const { addTodo, removeTodo, updateTodo, completeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
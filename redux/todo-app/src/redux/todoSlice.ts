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
}

// The initial state of the slice is defined as an object
const initialState: todoSliceState = {
    todos: []
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
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
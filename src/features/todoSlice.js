import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((t)=>t.id !== action.payload)
        },

        updateTodo: (state,action)=>{
            const updatedData = state.todos.map((i)=>{
                i.id === action.payload.id ? {...i,...action.payload.updatedData}:i
            });
            return updatedData;
        }
    }
})

export const { addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;


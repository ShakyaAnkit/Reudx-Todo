import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        handleCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    item.done = !item.done
                }
            })
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((item) => item.id !== action.payload)
        }
    }
});

export const { saveTodo, handleCheck, removeTodo } = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export default todoSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlices.js'

export const store = configureStore({ reducer: {
    todo : todoReducer
} })
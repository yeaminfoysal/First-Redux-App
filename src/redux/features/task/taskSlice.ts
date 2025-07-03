import type { RootState } from "@/redux/store";
import type { Itask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: Itask[]
}

const initialState: InitialState = {
    tasks: [
        {
            id: "jgufhjvkj",
            title: "hello world",
            description: "hello world description",
            dueDate: '01-03-2025',
            isComplete: false,
            priority: 'High'
        },
        {
            id: "jgufhjvkj",
            title: "hello world",
            description: "hello world description",
            dueDate: '01-03-2025',
            isComplete: false,
            priority: 'Medium'
        },
        {
            id: "jgufhjvkj",
            title: "hello world",
            description: "hello world description",
            dueDate: '01-03-2025',
            isComplete: false,
            priority: 'Low'
        },
    ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
});
export const selectTask = (state: RootState) => {
    return state.todo.tasks
}

export default taskSlice.reducer;
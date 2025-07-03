import type { Itask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: Itask[]
}

const initialState: InitialState = {
    task: [
        {
            id: "jgufhjvkj",
            title: "hello world",
            description: "hello world description",
            dueDate: '01-03-2025',
            isComplete: false,
            priority: 'High'
        }
    ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
});

export default taskSlice.reducer;
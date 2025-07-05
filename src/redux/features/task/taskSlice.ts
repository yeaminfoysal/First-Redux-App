import type { RootState } from "@/redux/store";
import type { Itask } from "@/types/types";
import { createSlice, nanoid } from "@reduxjs/toolkit";

interface InitialState {
    tasks: Itask[]
}

const initialState: InitialState = {
    tasks: [
    ]
}

type DraftTask = Pick<Itask, "title" | "description" | "dueDate" | "priority">

const createTask = (taskData: DraftTask): Itask => {
    return {
        id: nanoid(),
        isComplete: false,
        ...taskData
    }
}
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            
            // const id = uuidv4;
            // const task = {
            //     id,
            //     isComplete: false,
            //     ...action.payload
            // }

            const task = createTask(action.payload)

            state.tasks.push(task)
        }
    }
});
export const selectTask = (state: RootState) => {
    return state.todo.tasks
}

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
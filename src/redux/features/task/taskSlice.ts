import type { RootState } from "@/redux/store";
import type { Itask } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface InitialState {
    tasks: Itask[],
    filter: string
}

const initialState: InitialState = {
    tasks: [
        {
            id: "d_y9Wqal_4P5GgoL5fhJp",
            isComplete: false,
            title: "hello",
            description: "world",
            priority: "medium",
            dueDate: "2025-07-31T18:00:00.000Z",
            assignTo: "M3lwjeKKjbYv8GGOjiq70"
        }
    ],
    filter: "all"
}

type DraftTask = Pick<Itask, "title" | "description" | "dueDate" | "priority" | "assignTo">

const createTask = (taskData: DraftTask): Itask => {
    return {
        id: nanoid(),
        isComplete: false,
        assignTo: taskData.assignTo ? taskData.assignTo : null,
        ...taskData
    }
}
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {

            // const id = uuidv4;
            // const task = {
            //     id,
            //     isComplete: false,
            //     ...action.payload
            // }

            const task = createTask(action.payload)

            state.tasks.push(task)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) =>
                task.id == action.payload
                    ? (task.isComplete = !task.isComplete)
                    : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => {
            state.tasks.forEach((task) =>
                task.assignTo == action.payload ? (task.assignTo = null) : task
            )
        })
    }
});

export const selectTask = (state: RootState) => {
    const filter = state.todo.filter;
    if (filter == "low") {
        return state.todo.tasks.filter((task) => task.priority == "low")
    } else if (filter == "medium") {
        return state.todo.tasks.filter((task) => task.priority == "medium")
    } else if (filter == "high") {
        return state.todo.tasks.filter((task) => task.priority == "high")
    } else {
        return state.todo.tasks
    }
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;
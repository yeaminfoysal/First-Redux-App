import type { IUser } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    users: IUser[];
}
const initialState: InitialState = {
    users: [
        {
            id: "M3lwjeKKjbYv8GGOjiq68",
            name: "Yeamin Foysal"
        },
        {
            id: "M3lwjeKKjbYv8GGOjiq69",
            name: "Abrar Foysal"
        },
        {
            id: "M3lwjeKKjbYv8GGOjiq70",
            name: "Rakib Foysal"
        }
    ]
}
type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser) => {
    return { id: nanoid(), ...userData }
}
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = createUser(action.payload);
            state.users.push(userData);
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice"
import userReducer from "./features/user/userSlice"

export const store = configureStore({
    reducer: {
        todo: taskReducer,
        user: userReducer
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
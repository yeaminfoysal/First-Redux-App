import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import {
    createBrowserRouter,
} from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Hello world</div>
        Component: App,
        children: [
            {
                index: true,
                Component: Tasks
            },
            {
                path: 'tasks',
                Component: Tasks
            },
            {
                path: 'user',
                Component: User
            }
        ]
    },

])

export default router
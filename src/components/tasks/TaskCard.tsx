// import { Trash2 } from "lucide-react";
// import { Button } from "../ui/button";
// import { Checkbox } from "../ui/checkbox";
import type { Itask } from "@/types/types";
import { cn } from "@/lib/utils";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";

interface IProps {
    task: Itask
}

export default function TaskCard({ task }: IProps) {
    // const dispatch = useAppDispatch();
    // const users = useAppSelector(state => state.user.users);

    // const assignedUser = users.find(user => user.id == task.assignTo)

    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority == "low",
                        "bg-orange-500": task.priority == "medium",
                        "bg-red-500": task.priority == "high"
                    })}></div>
                    <h1 className={cn({ "line-through": task.isComplete })}>{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    {/* <Button onClick={() => dispatch(deleteTask(task.id))} variant="link" className="p-0 text-red-500">
                        <Trash2 />
                    </Button> */}
                    {/* <Checkbox checked={task.isComplete} onClick={() => dispatch(toggleCompleteState(task.id))} /> */}
                </div>
            </div>
            {
                // assignedUser ? <p>Assigned to: {assignedUser.name}</p> : ""
            }
            <p className="mt-5">{task.description}</p>
        </div>
    )
}

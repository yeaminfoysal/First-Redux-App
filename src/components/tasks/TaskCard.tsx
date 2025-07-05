import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import type { Itask } from "@/types/types";
import { cn } from "@/lib/utils";

interface IProps {
    task: Itask
}

export default function TaskCard({ task }: IProps) {
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority == "low",
                        "bg-orange-500": task.priority == "medium",
                        "bg-red-500": task.priority == "high"
                    })}></div>
                    <h1>{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button variant="link" className="p-0 text-red-500">
                        <Trash2 />
                    </Button>
                    <Checkbox />
                </div>
            </div>
            <p className="mt-5">{task.description}</p>
        </div>
    )
}

import { AddTaskModal } from '@/components/tasks/AddTaskModal';
import TaskCard from '@/components/tasks/TaskCard';
import { selectTask } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hooks'

export default function Tasks() {
    // const tasks = useAppSelector(state => state.todo.tasks)
    const tasks = useAppSelector(selectTask)

    console.log(tasks);

    return (
        <div className='max-w-7xl mx-auto mt-20 px-5'>
            <div className='flex justify-between items-center'>
                <h1>Tasks</h1>
                <AddTaskModal/>
            </div>
            <div className='space-y-5 mt-5'>
                {
                    tasks.map((task, idx) => (
                        <TaskCard key={idx} task={task} />
                    ))
                }
            </div>
        </div>
    )
}

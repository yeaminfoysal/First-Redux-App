import { AddTaskModal } from '@/components/tasks/AddTaskModal';
import TaskCard from '@/components/tasks/TaskCard';
// import TaskCard from '@/components/tasks/TaskCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetTasksQuery } from '@/redux/api/baseApi';
// import { selectTask, updateFilter } from '@/redux/features/task/taskSlice';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Tasks() {
    // const tasks = useAppSelector(state => state.todo.tasks)
    // const tasks = useAppSelector(selectTask)
    // const dispatch = useAppDispatch();

    // console.log(tasks);
    const { data, isLoading, isError } = useGetTasksQuery(undefined, {
        pollingInterval: 5000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    })
    console.log(data?.tasks, isLoading, isError);

    return (
        <div className='max-w-7xl mx-auto mt-20 px-5'>
            <div className='flex justify-end items-center gap-5'>
                <h1 className='mr-auto'>Tasks</h1>
                <Tabs defaultValue='all'>
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        {/* <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">High</TabsTrigger> */}
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            <div className='space-y-5 mt-5'>
                {/* <TaskCard /> */}
                {
                    data?.tasks && data?.tasks.map((task, idx) => (
                        <TaskCard key={idx} task={task} />
                    ))
                }
            </div>
        </div>
    )
}

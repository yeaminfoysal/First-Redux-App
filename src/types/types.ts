export interface Itask{
    id: string,
    title: string,
    description: string,
    priority: 'High' | 'Medium' | 'Low',
    isComplete: boolean,
    dueDate: string
}
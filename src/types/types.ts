export interface Itask{
    id: string,
    title: string,
    description: string,
    priority: 'high' | 'medium' | 'low',
    isComplete: boolean,
    dueDate: string
}
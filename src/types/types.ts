export interface Itask{
    id: string,
    title: string,
    description: string,
    priority: 'high' | 'medium' | 'low',
    isComplete: boolean,
    dueDate: string
}

export interface IUser{
    id: string,
    name: string
}
export interface Task {
    _id?: string | undefined;
    name: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    priority: 'Low' | 'Medium' | 'High';
    description: string;
}
import TaskItem from '../TaskItem/TaskItem';
import { Task } from '../../types';

interface TaskListProps {
  tasks: Task[];
  onReload: () => void;
}

function TaskList({ tasks, onReload }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onReload={onReload} />
      ))}
    </div>
  );
}

export default TaskList;
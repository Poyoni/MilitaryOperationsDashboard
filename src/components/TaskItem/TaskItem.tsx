import { Task } from '../../types';
import { updateTaskStatus, deleteTask } from '../../api/api';

interface TaskItemProps {
  task: Task;
  onReload: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onReload }: TaskItemProps) => {
  const handleStatusChange = async () => {
    try {
      await updateTaskStatus(task._id!); 
      onReload();
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task._id!);
      onReload();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleStatusChange} disabled={task.status === 'Completed'}>
        Update Status
      </button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
}

export default TaskItem;


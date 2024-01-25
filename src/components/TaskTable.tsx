import { TransitionGroup } from 'react-transition-group';
import { Collapse } from '@mui/material';
import { useAppSelector } from '../slices/hooks';
import { tasksSelector } from '../slices/tasksSlice';
import TaskItem from './TaskItem';

const TaskTable = () => {
  const tasks = useAppSelector(tasksSelector.selectAll);

  const renderTasks = () => tasks.map((task) => (
    <Collapse>
      <TaskItem key={task.id} title={task.title} id={task.id} />
    </Collapse>
  ));

  return (
    <div style={{ width: '100%' }}>
      <TransitionGroup>
        {renderTasks()}
      </TransitionGroup>
    </div>
  );
};

export default TaskTable;

import { Box, TextField, Checkbox } from '@mui/material';
import { useState } from 'react';
import _ from 'lodash';
import { useAppDispatch } from '../slices/hooks';
import { addTask, updateTask, removeTask } from '../slices/tasksSlice';

interface TaskItemProps {
  id: string;
  title: string;
}

const rowStyles = {
  display: 'flex',
  p: 1,
  bgcolor: (theme: any) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  color: (theme: any) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
  border: '1px solid',
  borderColor: (theme: any) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
  borderRadius: 2,
  fontSize: '0.875rem',
  fontWeight: '700',
  maxWidth: 1160,
};

const taskStyles = {
  display: 'flex',
  flexGrow: 1,
  p: 1,
  mr: 1,
  bgcolor: (theme: any) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  color: (theme: any) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
  border: '1px solid',
  borderColor: (theme: any) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
  borderRadius: 2,
  fontSize: '0.875rem',
  fontWeight: '700',
  minWidth: 540,
};

const itemStyles = {
  display: 'flex',
  p: 1,
  mr: 1,
  bgcolor: (theme: any) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  color: (theme: any) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
  border: '1px solid',
  borderColor: (theme: any) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
  borderRadius: 2,
  fontSize: '0.875rem',
  fontWeight: '700',
  minWidth: 160,
};

const TaskItem = (props: TaskItemProps) => {
  const { id, title } = props;
  const dispatch = useAppDispatch();
  const [componentState, setState] = useState('text');
  const [currentTitle, setTitle] = useState(title);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task = { id: _.uniqueId(), title: currentTitle };
    if (currentTitle !== '') {
      if (id) {
        // Если есть id, то обновляем задачу
        dispatch(updateTask({ id, changes: { title: currentTitle } }));
      } else {
        // Иначе добавляем новую задачу
        dispatch(addTask(task));
      }
    }

    setTitle('');
  };

  return (
    <Box
      sx={rowStyles}
      key={id}
    >
      <Checkbox onClick={() => dispatch(removeTask(id))} {...{ inputProps: { 'aria-label': 'Checkbox demo' } }} />
      <Box
        sx={taskStyles}
      >
        {componentState === 'text'
          ? (
            <Box onClick={() => setState('input')} component="span">
              {title}
            </Box>
          )
          : (
            <form className="custom-form" onSubmit={(e) => { setState('text'); handleSubmit(e); }}>
              <TextField
                id="outlined-basic"
                variant="standard"
                value={currentTitle === '' ? title : currentTitle}
                onChange={handleChange}
                size="small"
                InputProps={{
                  inputProps: {
                    style: {
                      padding: 0,
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: '#424242',
                    },
                  },
                  disableUnderline: true,
                }}
              />
            </form>
          )}
      </Box>
      <Box
        sx={itemStyles}
      >
        25 января
      </Box>
      <Box
        sx={itemStyles}
      >
        Humess
      </Box>
      <Box
        sx={itemStyles}
      >
        Игорь Назим
      </Box>
    </Box>
  );
};
export default TaskItem;

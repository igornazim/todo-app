import { useState } from 'react';
import _ from 'lodash';
import { TextField, Button, FormGroup } from '@mui/material';
import { useAppDispatch } from '../slices/hooks';
import { addTask } from '../slices/tasksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task = { id: _.uniqueId(), title };
    if (title !== '') {
      dispatch(addTask(task));
    }
    setTitle('');
  };

  return (
    <form style={{ margin: '80px' }} onSubmit={handleSubmit}>
      Enter your task:
      <FormGroup sx={{
        width: '408px', display: 'flex', flexDirection: 'row', alignItems: 'center',
      }}
      >
        <TextField
          id="outlined-basic"
          label="Enter your task"
          variant="outlined"
          value={title}
          onChange={handleChange}
          sx={{ width: '320px', height: '40px', mr: '8px' }}
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ height: '40px', background: '#0D2960', width: '80px' }}
        >
          Add
        </Button>
      </FormGroup>
    </form>
  );
};

export default Form;

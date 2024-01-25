import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from './index';

interface Task {
  id: string,
  title: string,
}

const tasksAdapter = createEntityAdapter<Task>();

const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
    removeTask: tasksAdapter.removeOne,
    updateTask: tasksAdapter.updateOne,
  },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export const tasksSelector = tasksAdapter
  .getSelectors((state: RootState) => state.tasksReducer);
export default tasksSlice.reducer;

import './index.css';
import { Box, Grid } from '@mui/material';
import Footer from './components/Footer';
// import MiniDrawer from './components/LeftPanel';
import Main from './components/Main';
import TaskTable from './components/TaskTable';

const App = () => (
  <div className="app">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} container justifyContent="center">
          <TaskTable />
          <Main />
        </Grid>
      </Grid>
    </Box>
    <Footer />
  </div>
);

export default App;

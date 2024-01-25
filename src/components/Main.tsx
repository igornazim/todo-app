import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Form from './Form';

const Main = () => (
  <>
    <CssBaseline />
    <Container maxWidth="sm">
      <Box sx={{
        bgcolor: '#cfe8fc',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
      >
        <Form />
      </Box>
    </Container>
  </>
);

export default Main;

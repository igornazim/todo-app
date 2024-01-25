import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{ background: '#0D2960', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'block' } }}
        >
          TODO
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;

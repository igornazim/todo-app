import { Box, Grid, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{
    background: '#0D2960',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: (theme) => theme.zIndex.drawer + 1,
    minHeight: {
      xs: 140,
      lg: 80,
      xl: 100,
    },
    display: 'flex',
    alignItems: 'center',
  }}
  >
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Typography
          sx={{
            color: '#fff',
            verticalAlign: 'center',
          }}
        >
          TODO app, 2024
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography
          sx={{
            color: '#fff',
            verticalAlign: 'center',
          }}
        >
          Created by Igor Nazim
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography
          sx={{
            color: '#fff',
            verticalAlign: 'center',
          }}
        >
          View code on GitHub
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import GridPage from './GridPage';
import TimeLine from './TimeLine';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://seo-faper.github.io/">
        seo-faper
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          서종찬의 Portfolio
        </Typography>
      </Container>
      <Container component="article" sx={{ mt: 5, mb: 4 }} maxWidth="sm">
      <CssBaseline />
        <TimeLine/>
      <CssBaseline/>
        <GridPage/>
      </Container>
      <Box
        component="footer"
        sx={{
          
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Powered by github Page
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
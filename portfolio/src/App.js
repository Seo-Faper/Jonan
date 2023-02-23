import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import OffcanvasExample from './component/OffcanvasExample';
import ControlledTabsExample from './component/ControlledTabsExample';


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
    <div>
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <OffcanvasExample></OffcanvasExample>
      <CssBaseline />
      <Container component="article" sx={{ mt: 5}} maxWidth="lg">
        <ControlledTabsExample></ControlledTabsExample>
      </Container>
      <Box
        component="footer"
        className="footer"
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
            Powered by github Page / Definitely Original CQ Tierlist
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>

    </div>
  );
}
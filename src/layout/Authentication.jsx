import React from 'react';
import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Logo} from 'components/';
import SignInWithSocial from 'pages/Authentication/SignInWithSocial';


const AuthenticationWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  minHeight: '100vh',
  overFlowY: 'auto',
  backgroundColor: theme.palette.background.paper,
}));

function Authentication() {
  return (
    <AuthenticationWrapper>
      <Box
        component='main'
        role='main'
        sx={{
          margin: 'auto',
          minHeight: 400,
        }}
      >
        <Box>
          <Logo />
          <Box
            component='section'
            sx={{
              width: 300,
              px: 3,
              mt: 2,
              borderRadius: 1.5,
              backgroundColor: 'background.default',
              textAlign: 'center',
            }}
          >
            <Outlet />
            <SignInWithSocial />
          </Box>
        </Box>
      </Box>
    </AuthenticationWrapper>
  );
}

export default Authentication;

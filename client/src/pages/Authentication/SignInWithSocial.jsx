import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import {Box} from '@mui/material';

import {MUIButtonSocial} from 'components/MUIs/';

const StyleForSignInWithSocialBox = {
  position: 'relative',
  my: 1.5,
  '&:before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    width: 80,
    height: '0.5px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  '&:after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    width: 80,
    height: '0.5px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
};
function SignInWithSocial() {
  return (
    <>
      <Box  sx={StyleForSignInWithSocialBox}>
        Sign in with social
      </Box>
      <Box
        sx={{
          pt: 3,
          pb: 1.5,
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <MUIButtonSocial
          variant='outlined'
          startIcon={<FacebookIcon />}
        />
        <MUIButtonSocial
          variant='outlined'
          startIcon={<GoogleIcon />}
        />
      </Box>
    </>
  );
}

export default SignInWithSocial;

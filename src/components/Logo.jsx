import React from 'react';
import {Box, CardMedia, Typography} from '@mui/material';
import LogoImageWhite from 'assets/images/logoWhite.png';
import LogoImage from 'assets/images/logo.png';
import {Link} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';
import {useLocation} from 'react-router-dom';

function Logo() {
  const theme = useTheme();
  const location = useLocation();
  const [currentLogo, setCurrentLogo] =
    React.useState(LogoImageWhite);
  React.useEffect(() => {
    setCurrentLogo(
      location.pathname.includes('actions')
        ? LogoImageWhite
        : theme.mode === 'light'
        ? LogoImage
        : LogoImageWhite
    );
  }, [location, theme.mode]);

  return (
    <Box
      component='aside'
      sx={{
        backgroundColor: !location.pathname.includes(
          'actions'
        )
          ? 'background.default'
          : 'palette.primary.main',
      }}
    >
      <Link
        to='/'
        title='Back to home page'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        <CardMedia
          component='img'
          image={currentLogo}
          sx={{width: 100,  height: 60, mx: '-20px', objectFit: 'cover'}}
          alt="It's time"
          title='Back to home page'
        />
        <Typography
          component='span'
          variant='h5'
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bolder',
            letterSpacing: '0.5px',
            color: location.pathname.includes('actions')
              ? 'common.white'
              : 'text.secondary',
          }}
        >
          It's time
        </Typography>
      </Link>
    </Box>
  );
}

export default Logo;

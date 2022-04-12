import {styled} from '@mui/material/styles';
import {
  Container,
  TextField,
  Button,
  CardMedia,
  InputAdornment,
  Box,
} from '@mui/material';

const MUIContainer = styled(Container)({
  '& .MuiContainer-root': {
    padding: 0,
    margin: 0,
  },
});

const MUISvgIcon = ({icon, position, ...props}) => {
  return (
    <InputAdornment
      position={position}
      sx={{
        opacity: 0.6,
        cursor: 'pointer',
        '&:hover': {
          opacity: 1,
        },
      }}
    >
      <CardMedia component='img' src={icon} {...props} />
    </InputAdornment>
  );
};

const StyledButton = styled(Button)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.5px',
  minWidth: 180,
  height: 40,
  borderRadius: theme.spacing(1),
  '&.MuiButton-outlinedPrimary': {
    borderColor: theme.palette.action.hover,
    color: theme.palette.primary,
    backgroundColor: theme.palette.action.hover,
    '&:hover': {
      borderColor: theme.palette.common.white,
      backgroundColor: theme.palette.common.primary,
      color: theme.palette.common.white,
    },
  },
  '& .MuiButton-startIcon': {
    marginRight: 'auto',
  },
  '& .MuiButton-endIcon': {
    marginLeft: 'auto',
  },
  // '& a': {
  //   textDecoration: 'none',
  // }
}));

const MUIButton = ({children, ...props}) => {
  return (
    <Box
      sx={{
        mb: 1.5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <StyledButton
        variant='contained'
        size='medium'
        {...props}
      >
        {children}
      </StyledButton>
    </Box>
  );
};
const MUIButtonSocial = ({children, ...props}) => {
  return (
    <Box
      sx={{
        mb: 1.5,
      }}
    >
      <StyledButton
        variant='contained'
        size='medium'
        {...props}
        sx={{
          color:'common.black',
          minWidth: 40,
          height: 40,
          borderRadius: '50%',
          p: 0,
          mx: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiButton-startIcon': {
            mx: 0,
          },
        }}
      />
    </Box>
  );
};

const MUITextField = styled(TextField)(({theme}) => ({
  width: '100%',
  
  '& .MuiInputLabel-root': {
    display: 'none',
    
  },
  '& .MuiInputBase-input': {
    bgColor: '#fff',
    padding: theme.spacing(1, 0.5),
    borderColor: '#ccc',
    '& .MuiFormHelperText-root ':{
      m:0
    }
  },
  '& .MuiOutlinedInput-root ': {
    height: 40,
    borderRadius: theme.spacing(0.5),
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.common.primary}`,
    },
    
  },
  
}));

export {
  MUIContainer,
  MUITextField,
  MUIButton,
  MUISvgIcon,
  MUIButtonSocial,
};

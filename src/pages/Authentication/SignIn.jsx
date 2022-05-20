import React from 'react';
import {Box, Typography} from '@mui/material';
import {
  MUITextField,
  MUISvgIcon,
  MUIButton,
} from 'components/MUIs/';
import {
  emailIcon,
  showPassIcon,
  hidePassIcon,
} from 'assets/icons/';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email()
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(
      6,
      'Password should be of minimum 6 characters length'
    )
    .required('Password is required'),
});
function SignIn() {
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, {setSubmitting}) => {
      setSubmitting(true);
      console.log(values);
    },
  });

  const {
    values,
    handleSubmit,
    handleChange,
    getFieldProps,
    touched,
    errors,
  } = formik;
  const inputs = {
    email: React.createRef(),
    password: React.createRef(),
  };

  const [showPass, setShowPass] = React.useState(false);
  return (
    <>
      <Typography variant='h5' sx={{py: 2.5}}>
        Sign In
      </Typography>

      <Box
        onSubmit={handleSubmit}
        component='form'
        autoComplete='off'
        noValidate
        sx={{'&  .MuiTextField-root': {mb: 1.5}}}
      >
        <MUITextField
          placeholder='Email'
          type='email'
          inputRef={inputs.email}
          {...getFieldProps('email')}
          onChange={handleChange}
          error={Boolean(errors.email && touched.email)}
          helperText={touched.email && errors.email}
          InputProps={{
            startAdornment: (
              <MUISvgIcon
                position='start'
                icon={emailIcon}
                alt='Enter email'
                sx={{width: 20}}
                onClick={() => inputs.email.current.focus()}
              />
            ),
          }}
        />
        <MUITextField
          autoComplete='password'
          placeholder='Password'
          type={showPass ? 'text' : 'password'}
          inputRef={inputs.password}
          {...getFieldProps('password')}
          onChange={handleChange}
          error={Boolean(
            errors.password && touched.password
          )}
          helperText={touched.password && errors.password}
          InputProps={{
            startAdornment: (
              <MUISvgIcon
                position='start'
                onClick={() => {
                  inputs.password.current.focus();
                  setShowPass(!showPass);
                }}
                icon={
                  showPass ? showPassIcon : hidePassIcon
                }
                alt='password'
                sx={{width: 20}}
              />
            ),
          }}
        />
        <Box
          sx={{
            textAlign: 'right',
            pb: 1.5,
          }}
        >
          <Link to='/actions/forgot-password'>
            <Typography
              sx={{
                fontSize: '14px',
                textDecoration: 'underline',
                color: 'common.primary',
                '&:hover': {
                  color: 'common.black',
                },
              }}
            >
              Forgot password?
            </Typography>
          </Link>
        </Box>
        <MUIButton
          type='submit'
          bgcolor='common.white'
          sx={{width: '100%'}}
        >
          Sign in
        </MUIButton>
      </Box>
      <Box
        component='span'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 2,
        }}
      >
        Not a member?
        <Link to='/actions/sign-up'>
          <Typography
            sx={{
              ml: 1,
              color: 'common.primary',
              '&:hover': {
                color: 'common.black',
              },
            }}
          >
            Sign up
          </Typography>
        </Link>
      </Box>
    </>
  );
}

export default SignIn;

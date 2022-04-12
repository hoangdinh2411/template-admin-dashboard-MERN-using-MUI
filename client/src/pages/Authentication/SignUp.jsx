import React from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
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
  confirmPassword: '',
  agreePolicy: false,
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
  confirmPassword: yup
    .string()
    .trim()
    .required('Please retype your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  agreePolicy: yup
    .bool()
    .oneOf([true], 'The terms and conditions must be accepted'),
  // .required()
});

function SignUp() {
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, actions) => {
      actions.setSubmitting(true);
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
    confirmPassword: React.createRef(),
  };

  const [showPass, setShowPass] = React.useState(false);
  return (
    <>
      <Typography variant='h5' sx={{py: 2.5}}>
        Sign Up
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        autoComplete='off'
        noValidate
        sx={{'&  .MuiTextField-root': {mb: 1.5}}}
      >
        <MUITextField
          placeholder='Email'
          type='email'
          inputRef={inputs.email}
          // value={values.email}
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
        <MUITextField
          autoComplete='password'
          placeholder='Password'
          type={showPass ? 'text' : 'password'}
          inputRef={inputs.confirmPassword}
          {...getFieldProps('confirmPassword')}
          onChange={handleChange}
          error={Boolean(
            errors.confirmPassword &&
              touched.confirmPassword
          )}
          helperText={
            touched.confirmPassword &&
            errors.confirmPassword
          }
          InputProps={{
            startAdornment: (
              <MUISvgIcon
                position='start'
                onClick={() => {
                  inputs.confirmPassword.current.focus();
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
            pb: 2,
          }}
        >
          <FormControlLabel
            sx={{
              '&.MuiFormControlLabel-root': {
                width: '100%',
                mr: 0,
              },
            }}
            control={
              <Checkbox
                checked={values.agreePolicy}
                {...getFieldProps('agreePolicy')}
                onChange={handleChange}
                size='small'
                sx={{
                  '&.MuiCheckbox-root': {
                    p: 0.5,
                    mr: 1.5,
                  },
                }}
              />
            }
            label={
              <Typography
              component="span"
                sx={{
                  fontSize: '12px',
                  display: 'flex',
                }}
              >
                Agree the
                <Link to='/policy'>
                  <Typography
                    sx={{
                      ml: '4px',
                      fontSize: '12px',
                      textDecoration: 'underline',
                      color: 'common.primary',
                      '&:hover': {
                        color: 'common.black',
                      },
                    }}
                  >
                    terms and policy
                  </Typography>
                </Link>
              </Typography>
            }
          />
          {errors.agreePolicy ? (
            <Typography
              sx={{
                ml: '14px',
                fontSize: '12px',
                color: 'error.main',
                textAlign: 'left',
              width:'100% '
              }}
            >
              {errors.agreePolicy}
            </Typography>
          ) : null}
        </Box>
        <MUIButton
          type='submit'
          bgcolor='common.white'
          sx={{width: '100%'}}
        >
          Sign Up
        </MUIButton>
      </Box>
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 1.5,
        }}
      >
        Already have account?
        <Link to='/actions/sign-in'>
          <Typography
            sx={{
              ml: 1,
              color: 'common.primary',
              '&:hover': {
                color: 'common.black',
              },
            }}
          >
            Sign in
          </Typography>
        </Link>
      </Box>
    </>
  );
}

export default SignUp;

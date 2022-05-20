import React from 'react';
import {Box, Typography} from '@mui/material';
import {
  MUITextField,
  MUISvgIcon,
  MUIButton,
} from 'components/MUIs/';
import {emailIcon} from 'assets/icons/';
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
});
function ForgetPassword() {
  const inputs = {
    email: React.createRef(),
  };
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, {setSubmitting}) => {
      setSubmitting(true);
      console.log(values);
    },
  });

  const {
    handleSubmit,
    handleChange,
    getFieldProps,
    touched,
    errors,
  } = formik;
  return (
    <>
      <Typography variant='h5' sx={{py: 2.5}}>
        Forgot Password
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        autoComplete='off'
        noValidate
        sx={{'&  .MuiTextField-root': {mb: 2}}}
      >
        <Typography
          component='p'
          sx={{
            fontSize: '13px',
            color: 'rgba(0,0,0,0.6)',
            mb: 2,
          }}
        >
          Enter the email address registered on your account
        </Typography>
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

        <MUIButton
          type='submit'
          bgcolor='common.white'
          sx={{width: '100%', mt: 2}}
        >
          Submit
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
        Remember?
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
            Send me back
          </Typography>
        </Link>
      </Box>
    </>
  );
}

export default ForgetPassword;

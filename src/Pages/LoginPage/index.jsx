import React, { useState } from 'react';
import Styles from './Styles';
import { Box, Typography } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { TextField } from '../../Components/TextField';

import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      username
      email
      createdAt
    }
  }
`;

const LOGIN_USER = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      createdAt
      token
    }
  }
`;

const LoginPage = (props) => {
  const [isNewUser, setIsNewUser] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();
  const navigate = useNavigate();
  const [graphQlErrors, setGraphQlErrors] = useState({});
  const [registerUser, { loading: registerLoading }] = useMutation(
    REGISTER_USER,
    {
      update(_, res) {
        console.log(res);
      },
      onError(err) {
        console.log(err);
        setGraphQlErrors(err.graphQLErrors[0].extensions.errors);
      },
    }
  );

  const [loginUser, { loading: loginLoading }] = useLazyQuery(LOGIN_USER, {
    onError(err) {
      console.log(err);
      setGraphQlErrors(err.graphQLErrors[0].extensions.errors);
    },
    onCompleted(data) {
      console.log(data);
      localStorage.setItem('token', data.login.token);
      navigate('/');
    },
  });

  const onRegister = async (data) => {
    await registerUser({
      variables: data,
    });
  };

  const onLogin = async (data) => {
    await loginUser({
      variables: { username: data.username, password: data.password },
    });
  };

  return (
    <Box sx={Styles.loginPageContainer}>
      <Box sx={{ width: '70%' }}>
        <Box sx={Styles.marketingContainer}></Box>
      </Box>
      <Box sx={{ width: '30%' }}>
        <Box sx={Styles.loginFormContainer}>
          <h2>{isNewUser ? 'Register' : 'Login'}</h2>
          <form onSubmit={handleSubmit(isNewUser ? onRegister : onLogin)}>
            {isNewUser ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ onChange, value, field }) => (
                    <TextField
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      label="Email Address"
                      type="email"
                      style={Styles.inputContainer}
                      value={value}
                      onChange={onChange}
                      error={formErrors.email || graphQlErrors.email}
                      helperText={
                        formErrors?.email?.message || graphQlErrors.email
                      }
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ onChange, value, field }) => (
                    <TextField
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      label="Username"
                      type="text"
                      style={Styles.inputContainer}
                      value={value}
                      onChange={onChange}
                      error={formErrors.username || graphQlErrors.username}
                      helperText={
                        formErrors?.username?.message || graphQlErrors.username
                      }
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ onChange, value, field }) => (
                    <TextField
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      label="Password"
                      type="password"
                      style={Styles.inputContainer}
                      value={value}
                      onChange={onChange}
                      error={formErrors.password || graphQlErrors.password}
                      helperText={
                        formErrors?.password?.message || graphQlErrors.password
                      }
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ onChange, value, field }) => (
                    <TextField
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      label="Confirm Password"
                      type="password"
                      style={Styles.inputContainer}
                      value={value}
                      onChange={onChange}
                      error={
                        formErrors.confirmPassword ||
                        graphQlErrors.confirmPassword
                      }
                      helperText={
                        formErrors?.confirmPassword?.message ||
                        graphQlErrors.confirmPassword
                      }
                      {...field}
                    />
                  )}
                />
                <Button
                  variant="text"
                  loading={registerLoading}
                  sx={{ alignSelf: 'flex-start' }}
                  onClick={() => {
                    setIsNewUser(false);
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'white' }}>
                    already have an account?
                  </Typography>
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={registerLoading}
                  >
                    {registerLoading ? 'Loading...' : 'Register'}
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ onChange, value, field }) => (
                    <TextField
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      label="Username"
                      type="text"
                      style={Styles.inputContainer}
                      value={value}
                      onChange={onChange}
                      error={formErrors.username || graphQlErrors.username}
                      helperText={
                        formErrors?.username?.message || graphQlErrors.username
                      }
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ onChange, value, field }) => (
                    <TextField
                      InputProps={{
                        style: { color: 'white' },
                      }}
                      InputLabelProps={{
                        style: { color: 'white' },
                      }}
                      label="Password"
                      type="password"
                      style={Styles.inputContainer}
                      value={value}
                      onChange={onChange}
                      error={formErrors.password || graphQlErrors.password}
                      helperText={
                        formErrors?.password?.message || graphQlErrors.password
                      }
                      {...field}
                    />
                  )}
                />
                <Button
                  variant="text"
                  loading={loginLoading}
                  sx={{ alignSelf: 'flex-start' }}
                  onClick={() => {
                    setIsNewUser(true);
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'white' }}>
                    Create new account?
                  </Typography>
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={loginLoading}
                  >
                    {loginLoading ? 'Loading...' : 'Login'}
                  </Button>
                </Box>
              </Box>
            )}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;

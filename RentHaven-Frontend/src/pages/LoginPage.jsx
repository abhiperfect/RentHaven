import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import Link from '@mui/material/Link';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

const AuthContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!isLogin) {
      if (!name.value || name.value.length < 1) {
        setNameError(true);
        setNameErrorMessage('Name is required.');
        isValid = false;
      } else {
        setNameError(false);
        setNameErrorMessage('');
      }
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });

    // Add your authentication logic here
    // e.g. navigate to a different page on successful login/sign-up
  };

  return (
    <>
      <CssBaseline />
      <AuthContainer direction="column">
        <Card variant="outlined">
          <Typography component="h1" variant="h4" align="center">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {!isLogin && (
              <TextField
                label="Full Name"
                required
                id="name"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'}
              />
            )}
            <TextField
              label="Email"
              required
              id="email"
              error={emailError}
              helperText={emailErrorMessage}
              color={emailError ? 'error' : 'primary'}
            />
            <TextField
              label="Password"
              required
              type="password"
              id="password"
              error={passwordError}
              helperText={passwordErrorMessage}
              color={passwordError ? 'error' : 'primary'}
            />
            {!isLogin && (
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive updates via email."
              />
            )}
            <Button type="submit" variant="contained">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
            <Typography align="center">
              {isLogin ? (
                <>
                  Don’t have an account?{' '}
                  <Link href="#" onClick={() => setIsLogin(false)}>
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <Link href="#" onClick={() => setIsLogin(true)}>
                    Sign In
                  </Link>
                </>
              )}
            </Typography>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={() => alert('Sign up/sign in with Google')}
            >
              {isLogin ? 'Sign In with Google' : 'Sign Up with Google'}
            </Button>
            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              onClick={() => alert('Sign up/sign in with Facebook')}
            >
              {isLogin ? 'Sign In with Facebook' : 'Sign Up with Facebook'}
            </Button>
          </Box>
        </Card>
      </AuthContainer>
    </>
  );
}

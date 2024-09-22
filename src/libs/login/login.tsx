import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { Button, TextField, Typography } from '@mui/material';
import loginImage from '../../assets/images/login_illustration.svg'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/use-auth-hook';

interface LoginProps {
  username: string;
  password: string;
  showPassword: boolean;
  showError: boolean;
}

const Login = () =>{
  const [values, setValues] = React.useState<LoginProps>({
    username: '',
    password: '',
    showPassword: false,
    showError: false
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const validateCredentials = (username: string, password: string) => {
    const correctPassword = 'amara@2024!';
    return password === correctPassword;
  };

  const handleSubmit = () => {
    if (!validateCredentials(values.username, values.password)) {
      setValues({...values, showError: true}); 
    } else {
      setValues({...values, showError: false});
      login(values.username);
      navigate('/home');
    }
  };

  const isFormValid = () => {
    return values.username.trim() !== '' && values.password.trim() !== '';
  };

  const handleChange =
    (prop: keyof LoginProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleUsernameChange = () => (event: { target: { value: string; }; }) => {
    setValues({
      ...values,
      username: event.target.value,
    });
  }

  const handleInputChange = () => (event: { target: { value: string; }; }) => {
    setValues({
      ...values,
      password: event.target.value,
    });
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='mt-20 w-5/6 flex'>
        <div className='mt-40 pl-24 mr-2 w-1/2 text-main-medium'>
          <Typography
              variant="h6"
              noWrap
              sx={{
                mt: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Login
          </Typography>
          <div className='my-10'>
            <TextField 
              id="outlined-basic" 
              name='email'
              label="Username" 
              variant="outlined" 
              placeholder='John'
              onChange={handleUsernameChange()} 
              sx={{width: '25rem', '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#0e046c',
                },
                '&:hover fieldset': {
                  borderColor: '#0e046c',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0e046c',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#0e046c',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#0e046c',
              },}}
              />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handleInputChange()}
              error={values.showError} // Pass error prop if the password is incorrect
              helperText={values.showError ? "Incorrect password" : ""} // Show error message
              sx={{width: '25rem', '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#0e046c',
                },
                '&:hover fieldset': {
                  borderColor: '#0e046c',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0e046c',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#0e046c',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#0e046c',
              },}}
              />
          </div>
          <div className='my-10'>
            <Button variant="contained" onClick={handleSubmit} disabled={!isFormValid()} sx={{backgroundColor:'#0e046c', width: '25rem', height: '3.25rem'}}>Login</Button>
          </div>
        </div>
        <div className='mx-2 w-1/2'>
          <img src={loginImage} alt="Login Illustration image" />
        </div>
      </div>
    </div>
  )
}

export default Login;

function e(e: any): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined {
  throw new Error('Function not implemented.');
}

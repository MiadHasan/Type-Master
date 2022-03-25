import React, {useState} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import useStyles from './styleLogin';
import {loginUser} from '../../../store/actions/auth';

const Signup = (props) => {
  const classes = useStyles();
  const error = useSelector((state) => state.auth.error);
  const isAuthinticated = useSelector((state) => state.auth.isAuthinticated);
  const dispatch = useDispatch();
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('try login');
    dispatch(loginUser(loginData));
  };

  let errorMessage = null;
  let redirect = null;

  if (isAuthinticated && !error) {
    redirect = <Redirect to="/" />
  }

  if (error) {
    errorMessage = <Typography color='error' variant="h6">{error}</Typography>
  }

  return (
    <div className={classes.container}>
      {redirect}
    <Paper className={classes.paper}>
        <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
        >
            <Typography variant="h6">Login</Typography>
            <TextField name="email" variant="outlined" label="Email" fullWidth value={loginData.email} onChange={(e) => setloginData({...loginData, email: e.target.value})}/>
            <TextField name="password" type="password" variant="outlined" label="Password" fullWidth value={loginData.password} onChange={(e) => setloginData({...loginData, password: e.target.value})}/>
            {errorMessage}
            <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Login</Button>
        </form>
    </Paper>
    </div>
  );
}

export default Signup;
import React, {useState} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import useStyles from './styleSignup';
import {createUser} from '../../../store/actions/auth';

const Signup = (props) => {
  const classes = useStyles();
  const error = useSelector((state) => state.auth.error);
  const isAuthinticated = useSelector((state) => state.auth.isAuthinticated);
  const dispatch = useDispatch();
  const [signupData, setsignupData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    dispatch(createUser(signupData));
  };
  let redirect = null;
  if (isAuthinticated && !error) {
    redirect = <Redirect to="/" />
  }

  let errorMessage = null;

  if (error) {
    errorMessage = <Typography variant="h6">{error}</Typography>
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
            <Typography variant="h6">Signup</Typography>
            {errorMessage}
            <TextField name="user" variant="outlined" label="User Name" fullWidth value={signupData.userName} onChange={(e) => setsignupData({...signupData, userName: e.target.value})}/>
            <TextField name="email" variant="outlined" label="Email" fullWidth value={signupData.email} onChange={(e) => setsignupData({...signupData, email: e.target.value})}/>
            <TextField name="password" type="password" variant="outlined" label="Password" fullWidth value={signupData.password} onChange={(e) => setsignupData({...signupData, password: e.target.value})}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Signup</Button>
        </form>
    </Paper>
    </div>
  );
}

export default Signup;
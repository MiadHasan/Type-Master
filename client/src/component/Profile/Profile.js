import React, { useEffect} from 'react';
import {Card, CardContent, CardHeader, Typography, Grid} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../Spinner/Spinner';

import useStyles from './styleProfile';
import Toolbar from '../Toolbar/Toolbar';
import { getStates } from '../../store/actions/profile';

const Profile = () => {
  const email = useSelector((state) => state.auth.email);
  const states = useSelector((state) => state.profile.states);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStates(email))
  }, [dispatch, email]);

  let profile = <Spinner />
  if (states) {
    profile = (
      <div>
        <Toolbar from="profile" />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="primary"
          gutterBottom
        >
          {states.userName}
        </Typography>
        <Grid container spacing={3} justify="space-between" alignItems="flex-end">
          <Card className={classes.card}>
            <CardHeader
              title='Total Lessons'
              className={classes.header}
              titleTypographyProps={{ align: 'center' }}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h3" component="h2" color="textSecondary">{states.total}</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardHeader
              title='WPM'
              className={classes.header}
              titleTypographyProps={{ align: 'center' }}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h3" component="h2" color="textSecondary">{states.wpm}</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardHeader
              title='Accuracy'
              className={classes.header}
              titleTypographyProps={{ align: 'center' }}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h3" component="h2" color="textSecondary">{states.accuracy}</Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardHeader
              title='Best'
              className={classes.header}
              titleTypographyProps={{ align: 'center' }}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h3" component="h2" color="textSecondary">{states.best}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
  return (
    profile
  );
};

export default Profile;
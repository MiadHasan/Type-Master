import React from 'react';
import {useStopwatch} from 'react-timer-hook';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './styleTimer';
import {resetTimer} from '../../../store/actions/timer';
import {updateStates} from '../../../store/actions/auth';
const Timer = () => {
  const {seconds, minutes, isRunning, start, pause, reset} = useStopwatch({autoStart: false});
  const text = useSelector((state) => state.text.text);
  const value = useSelector((state) => state.text.value);
  const shouldReset = useSelector((state) => state.timer.reset);
  const incorrect = useSelector((state) => state.text.incorrect);
  const isAuthinticated = useSelector((state) => state.auth.isAuthinticated)
  const email = useSelector((state) => state.auth.email)
  const dispatch = useDispatch();
  let accuracy = 0;
  const wpm = (seconds + minutes) === 0 ? 0 :  Math.ceil((((value.length / 5) / (minutes * 60 + seconds)) * 60));
  if (text === value && text) {
    accuracy = Math.ceil(100 - (incorrect / text.length) * 100);
  }
  if (!isRunning && value !== '' && text !== value) {
    start();
  } else if (isRunning && text === value) {
    pause();

    if (isAuthinticated) {
      const states = {
        email,
        accuracy,
        wpm,
      }
      dispatch(updateStates(states));
    }
  }
  if (shouldReset) {
    reset(0, false);
    dispatch(resetTimer(false));
  }
  
  const classes = useStyles();
  return (
    <div className={classes.Container}>
    <div className={classes.Timer}>
      {minutes}:{seconds}
    </div>
    <div className={classes.Wpm}>
      WPM: {wpm}
    </div>
    <div className={classes.Wpm}>
      Accuracy: {accuracy}%
    </div>
    </div>
  );
}

export default Timer;
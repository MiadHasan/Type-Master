import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import useStyles from './styleCharacters';
import { incrementMistake } from '../../store/actions/text';

const Characters = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    let mistake = 0;
    
    let quote = props.text.split('').map((item, index) => {
        if (index < props.input.length) {
            if(item === props.input[index] && mistake === 0) {
                return (
                    <span key={index} className={classes.Correct}>{item}</span>
                );
            } else {
                mistake = mistake + 1;
                return (
                    <span key={index} className={classes.Incorrect}>{item}</span>
                );
            }
        }
        return (
            <span key={index} className={classes.Normal}>{item}</span>
        );
    });
    useEffect(() => {
        if (mistake === 1) {
            dispatch(incrementMistake());
        }
    }, [dispatch, mistake])
    return (
        <div>{quote}</div>
    );
};

export default Characters;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '@material-ui/core';

import useStyle from './styleText';
import Characters from '../Characters/Characters';
import { fetchText, updateInput } from '../../store/actions/text';
import {resetTimer} from '../../store/actions/timer';
import Spinner from '../Spinner/Spinner';
import States from '../States/States';
import Toolbar from '../Toolbar/Toolbar';

const Text = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const text = useSelector((state) => state.text.text);
    const value = useSelector((state) => state.text.value);
    const handleButtonClick = () => {
        dispatch(resetTimer(true));
        dispatch(fetchText());
        dispatch(updateInput(''));
    }
    let inputOrButton = '';
    if (text === value) {
        inputOrButton = <Button
            fullWidth={true}
            variant='contained'
            color='primary'
            onClick={handleButtonClick}
          >
            New Text
        </Button>
    } else {
        inputOrButton = <textarea 
            className={classes.quoteInput} 
            placeholder="Type the above text here..." 
            value={value} onChange={(e) => handleChange(e)}>
        </textarea>
    }

    useEffect(() => {
        dispatch(fetchText());
    }, [dispatch]);

    const handleChange = (e) => {
        dispatch(updateInput(e.target.value))
    };
    return(
        <>
            <Toolbar />
            <div className={classes.Container}>
            <States />
            <div className={classes.Quote}>
                {text ? <Characters text={text} input={value} /> : <Spinner />}
            </div>
            {inputOrButton}
            </div>
        </>
    );
}

export default Text;
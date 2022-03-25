import React from 'react';

import Timer from './Timer/Timer';
import useStyles from './styleStates';

const States = () => {
    const classes = useStyles();
    return (
        <div className={classes.Container}>
            <Timer />
        </div>
    );
};

export default States;
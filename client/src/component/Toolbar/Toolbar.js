import React from 'react';
import { useSelector } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import useStyles from './styleToolbar';

const Toolbar = (props) => { 
    const classes = useStyles();
    const isAuthinticated = useSelector((state) => state.auth.isAuthinticated);
    const userName = useSelector((state) => state.auth.userName);
    let link = (isAuthinticated
        ? <NavigationItem link="/profile">{userName}</NavigationItem>
        : <div>Guest</div>);
    if (props.from === 'profile') {
        link = <NavigationItem link="/">Home</NavigationItem>
    }
    return (
        <div className={classes.Toolbar}>
            <div>
                {link}
            </div>
            <div>
                {isAuthinticated
                ? <NavigationItem link="/logout">Logout</NavigationItem>
                : (<><NavigationItem link="/signup">Signup</NavigationItem>
                <NavigationItem link="/login">Login</NavigationItem></>)}
            </div>
        </div>
    )
};

export default Toolbar;
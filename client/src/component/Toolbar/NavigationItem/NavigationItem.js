import React from 'react';
import {NavLink} from 'react-router-dom';

import useStyles from './styleNavigationItem';

const NavigationItem = (props) => {
  const classes = useStyles();
  return (
    <NavLink 
        to={props.link} 
        exact={props.exact}
        className={classes.container}>
            {props.children}
    </NavLink>
  )
};

export default NavigationItem;
import React, {Suspense, useEffect} from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Profile from './component/Profile/Profile';
import Text from './component/Text/Text';
import './styleApp.css';
import Signup from './container/Auth/Signup/Signup';
import Login from './container/Auth/Login/Login';
import Logout from './container/Auth/Logout/Logout';
import { checkAuthState } from './store/actions/auth';

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuthinticated)
    useEffect(() => {
        dispatch(checkAuthState());
    }, [dispatch]);
    let routes = (
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" exact component={Text} />
                <Redirect to="/" />
            </Switch>
        </Suspense>
    );
    if (isAuth) {
        routes = (
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={Text} />
                    <Redirect to="/" />
                </Switch>
            </Suspense>
        );
    }
    return (
        <div className="content">
            {routes}
        </div>
    )
};

export default withRouter(App);
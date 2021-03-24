import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from "./containers/home/Home";
import Page1 from "./containers/page1/Page1";
import Layout from './layout/Layout';
import Login from "./containers/login/Login";
import Advantages from "./containers/advantage/Advantages";


function Routes() {

    return (
        <Switch>
            <Route exact path='/' render={() => <Layout navbar={true} toolbar={true} children={<Home/>}/> } />
            <Route exact path='/page1' render={() => <Layout navbar={true} toolbar={true} children={<Advantages/>}/> } />
            <Route exact path='/login' render={() => <Layout navbar={false} toolbar={false} children={<Login/>}/> } />
        </Switch>
    );
}

export default withRouter(Routes);

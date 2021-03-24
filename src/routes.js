import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from "./containers/login/Login";
import Advantages from "./containers/advantage/Advantages";
import AddProducts from "./containers/addProducts/AddProducts";
import AddSingleProduct from "./containers/addSingleProduct/AddSingleProduct";


function Routes() {

    return (
        <Switch>
            <Route exact path='/page1' render={() => <Layout navbar={true} toolbar={true} children={<Advantages/>}/> } />
            <Route exact path='/login' render={() => <Layout navbar={false} toolbar={false} children={<Login/>}/> } />
            <Route exact path='/' render={() => <Layout navbar={false} toolbar={true} isAdmin={true} children={<AddProducts/>}/> } />
            <Route exact path='/tek-urun-ekleme/:step' render={() => <Layout navbar={false} toolbar={true} children={<AddSingleProduct/>}/> } />
        </Switch>
    );
}

export default withRouter(Routes);

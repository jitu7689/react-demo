import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./containers/Login/Login";
import HomePage from "./containers/Home/Home";
import DashboardPage from "./containers/Dashboard/Dashboard";

class App extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/admin-login" component={LoginPage}/>
                        <Route path="/home" component={HomePage}/>
                        <Route path="/dashboard" component={DashboardPage}/>
                        <Route path="/" component={HomePage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

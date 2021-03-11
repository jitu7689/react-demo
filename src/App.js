import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./containers/Login/Login";
import HomePage from "./containers/Home/Home";

class App extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/home" component={HomePage}/>
                        <Route path="/" component={LoginPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

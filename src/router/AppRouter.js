import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ChuckNorris from '../App';
import PostView from '../components/Jokes';

// extend AppRouter to Component

export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/** available routers inside the app to go back to home page and to jokes **/}
                    <Route exact path="/" component={ChuckNorris} />
                    <Route path="/jokes" component={PostView} />
                </div>
            </BrowserRouter>
        )
    }
}



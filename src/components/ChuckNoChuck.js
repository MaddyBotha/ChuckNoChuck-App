import React, { Component } from 'react';
import Posts from './CatList';

// extending function to apply component
export default class ChuckNorris extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Chuck, No Chuck React/Redux App</h1>
                    <h3>Pick one and try your luck</h3>
                </header>
                <Posts />
            </div>
        )
    }
}
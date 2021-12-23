import React, { Component } from 'react';

import Todo from "../components/Todo"

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>My Todo List</h1>

                <Todo text="Go grocery shopping" />
                <br />
                <Todo text="Eat ice cream" />
                <br />
                <Todo text="Finish React Assignment" />



            </div>
        );
    }
}
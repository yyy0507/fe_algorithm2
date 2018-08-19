import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/home'
import Task from './components/task'
import Project from './components/project'
import Navigation from './components/navigation'
import User from './components/user'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <div>
                <Task/>
                <Project/>
            </div>
        )
    }
}

ReactDOM.render(
    <App name="Ykit-Starter-Antd"/>, document.getElementById('app')
);


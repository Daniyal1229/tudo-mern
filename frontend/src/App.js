import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import TaskManager from './Components/TaskManager';

const App = () => {
    return (
        <Router>
            <div className="app">
                <TaskManager/>
            </div>
        </Router>
    );
};

export default App;

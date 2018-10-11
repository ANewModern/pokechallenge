// This will be the root of the react application. Only import what is absolutely necessary for this to run. The entire applications renders of this

import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = (
    <div>
        <Dashboard />
    </div>
);
ReactDOM.render(app, document.getElementById('app'));
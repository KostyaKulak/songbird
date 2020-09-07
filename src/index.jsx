import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './components/app/app';
import 'bootswatch/dist/materia/bootstrap.min.css';

const appNode = document.getElementById('root');
ReactDOM.render(<App />, appNode);

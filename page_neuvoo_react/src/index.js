/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.js'
import './global.css'
import popper from 'popper.js';
import $ from 'jquery';
import App from './containers/App';

const container = document.getElementById('app');

ReactDOM.render(<App />,container);


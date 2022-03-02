import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'semantic-ui-css/semantic.css';
import 'semantic-ui-react-spinbutton/dist/index.css';
import './index.css';


ReactDOM.render(
    React.createElement(React.StrictMode, {
        children: React.createElement(App)
    }),
    document.getElementById('root')
);

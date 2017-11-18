import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-bootstrap/dist/react-bootstrap.min.css';
import 'react-bootstrap/dist/navbar.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

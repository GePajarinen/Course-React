import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* importing Bootstrap first and then the index.css later. 
So if I add my own customization CSS classes, that can 
override the default Bootstrap classes if required.*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
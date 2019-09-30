//the original code generated from the following steps
//(1) npm init react-app interventioneval
//(2) cd to project directory
//(3) npm run build
//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

//// If you want your app to work offline and load faster, you can change
//// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import './index.css';

const render = Component => {
  ReactDOM.render(
    <MainApp />,
    document.getElementById('main')
  )
}

render(MainApp)
if (module.hot) {
  module.hot.accept('./MainApp', () => { render(MainApp) })
}

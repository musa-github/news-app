import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from './App'
import reportWebVitals from './reportWebVitals';


if(process.env.NODE_ENV === "development"){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}else{
  ReactDOM.render(<App />,document.getElementById('root'));
}


reportWebVitals();

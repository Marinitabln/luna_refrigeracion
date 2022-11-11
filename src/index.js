import React from 'react';
import ReactDOM from 'react-dom/client';
/* import ReactDOM from 'react-dom'; */
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/global.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
 */

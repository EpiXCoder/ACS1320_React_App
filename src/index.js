import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './components/App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import POPOSList from './components/POPOSList/POPOSList';
import reportWebVitals from './reportWebVitals';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';
import Register from './components/Registration/POPOSRegister';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </Router>,
  // document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

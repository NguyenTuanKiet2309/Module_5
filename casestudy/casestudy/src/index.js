import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <Header />
      <Content/>
      <Footer />
    </div>
     );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
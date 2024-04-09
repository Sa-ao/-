import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 使用React.StrictMode包裹可以帮我们检查一些react的语法问题
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


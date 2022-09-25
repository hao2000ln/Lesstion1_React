// Nhúng các logic xử lí js vào file này
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/*comment React.StrictMode để loại bỏ cái lỗi khi log ra bị duplicate  */}
    {/* <React.StrictMode> */} 
      <App />
    {/* </React.StrictMode> */}
  </Provider>
);
reportWebVitals();

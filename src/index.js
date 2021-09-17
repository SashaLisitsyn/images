import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import imagesStore from './store/imagesStore';

import App from './components/App';

render(
  <React.StrictMode>
    <Provider store={imagesStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

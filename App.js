import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js';
import Rankings from './views/Rankings.js';

export default function App() {
  return (
    <Provider store={store}>
      <Rankings />
    </Provider>
  );
}

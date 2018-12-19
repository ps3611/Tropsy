import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Rankings from './views/Rankings';

export default function App() {
  return (
    <Provider store={store}>
      <Rankings />
    </Provider>
  );
}

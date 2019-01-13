import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

const url = new URL(window.location.href);
ReactDOM.hydrate(
  <Hello name={url.searchParams.get('v') || 'Stranger'} />,
  document.getElementById('app')
);

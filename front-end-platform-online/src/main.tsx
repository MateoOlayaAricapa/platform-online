import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import { PlatformApp } from './router/app-platform';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlatformApp/>
  </React.StrictMode>,
)

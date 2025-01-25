import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client for React 18
import { registerLicense } from '@syncfusion/ej2-base';
import './index.css';
import App from './App.jsx';
import { ContextProvider } from './contexts/ContextProvider.jsx';

// License key for Syncfusion
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCf0x0Q3xbf1x1ZFREal9VTnVdUj0eQnxTdEBjWH5XcXZWQmNeV0FxWw==');

// Use createRoot for rendering
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root container
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

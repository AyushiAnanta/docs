import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import DocContext from './context/DocContext.jsx';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // Change from BrowserRouter

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <DocContext>
      <App />
    </DocContext>
  </HashRouter>
);

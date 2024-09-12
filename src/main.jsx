import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-L3W6R8DCDP';

ReactGA.initialize(MEASUREMENT_ID);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

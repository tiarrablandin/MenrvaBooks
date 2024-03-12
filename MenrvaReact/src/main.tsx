import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomNavbar from './components/Navbar/CustomNavbar';
import { Footer } from './components/Footer/Footer';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <CustomNavbar />
    <App />
    <Footer />
  </StrictMode>,
);

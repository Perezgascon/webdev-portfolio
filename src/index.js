import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = createRoot(document.getElementById('root'));
root.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
);

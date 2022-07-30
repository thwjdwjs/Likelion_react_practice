import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import { MyPageContextProvider } from './components/MyPageContext';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    background: #e9ecef;
  }

`;

const root = createRoot(document.getElementById('root'))

root.render(
  <MyPageContextProvider>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyPageContextProvider>,
);
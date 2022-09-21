import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { CreateMovie } from './pages/CreateMovie';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/styles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CreateMovie />
    </ThemeProvider>
  </React.StrictMode>
)

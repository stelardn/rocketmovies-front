import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { MoviePreview } from './pages/MoviePreview';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/styles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MoviePreview />
    </ThemeProvider>
  </React.StrictMode>
)

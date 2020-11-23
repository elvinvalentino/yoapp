import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import App from './App';
import ThemeProvider from './styles/Theme';
import ApolloProvider from './graphql/ApolloProvider';

ReactDOM.render(
  <ApolloProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);


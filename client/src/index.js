import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import App from './App';
import ThemeProvider from './styles/Theme';
import ApolloProvider from './graphql/ApolloProvider';
import ReduxProvider from './redux/Provider';

ReactDOM.render(
  <ApolloProvider>
    <ReduxProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </ApolloProvider>,
  document.getElementById('root')
);


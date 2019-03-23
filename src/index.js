import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const title = 'United remote frontend coding challenge';

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>
      {title}
    </div>
  </ApolloProvider>,
  document.getElementById('app')
);

module.hot.accept();
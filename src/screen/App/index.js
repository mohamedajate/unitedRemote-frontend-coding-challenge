import React from 'react';
import { Query } from "react-apollo";
import { SEARCH_REPOSITORY_QUERY } from '../../shared/graphql/queries'
import View from './view'

const App = (props) => (
  <Query
    query={SEARCH_REPOSITORY_QUERY}
    variables={{
      type: 'REPOSITORY',
      query: "created",
      first: 10
    }}
  >
    {({ loading, error, data }) => {

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      const { search: { nodes } } = data;
      return (
        <View
          nodes={nodes}
          {...props}
        />
      );
    }}
  </Query>
);

export default App;
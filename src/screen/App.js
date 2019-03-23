import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const App = () => (
  <Query
    query={gql`
      {
        repositoryOwner(login:"mohamedajaite") {
          avatarUrl
          id
          repositories {
            totalCount
          }
      }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const { repositoryOwner } = data;
      return (
        <div>
          <p>{repositoryOwner.avatarUrl}</p>
          <p>{repositoryOwner.id}</p>
        </div>
      );
    }}
  </Query>
);

export default App;
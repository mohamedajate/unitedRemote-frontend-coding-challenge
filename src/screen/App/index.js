import React, { PureComponent } from 'react';
import { Query } from "react-apollo";
import { SEARCH_REPOSITORY_QUERY } from '../../shared/graphql/queries'
import View from './view'

class App extends PureComponent {

  onLoadMore = () => {

  }
  render() {
    return (
      <Query
        query={SEARCH_REPOSITORY_QUERY}
        variables={{
          type: 'REPOSITORY',
          query: "created",
          first: 10
        }}
      >
        {({ loading, error, data, fetchMore }) => {

          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          const { search: { nodes, pageInfo: { endCursor } } } = data;
          return (
            <View
              nodes={nodes}
              onLoadMore={() =>
                fetchMore({
                  variables: {
                    type: 'REPOSITORY',
                    query: "created",
                    after: endCursor,
                    first: 10
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return { ...prev, search: { ...prev.search, ...fetchMoreResult.search } }
                  }
                })}
              {...this.props}
            />
          );
        }}
      </Query>
    )
  }
}
export default App;
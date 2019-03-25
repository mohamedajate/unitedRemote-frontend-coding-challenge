import gql from "graphql-tag";
import { SCHEMA } from './schema';

export const SEARCH_REPOSITORY_QUERY = gql`
query SearchRepository(
  $after: String,
  $before: String,
  $first: Int,
  $last: Int,
  $query: String!,
  $type: SearchType!
) {
  search(
    after: $after
    before: $before,
    first: $first,
    last: $last,
    query: $query,
    type: $type
    ) {
    ${SCHEMA}
  }
}
`;
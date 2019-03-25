export const SCHEMA = `
nodes {
  __typename 
  ...on Repository{
  name
  createdAt
  description
  owner {
  avatarUrl
  }
  issues {
  totalCount
  }
  stargazers {
  totalCount
  }
  }
  }
  pageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  }
`;

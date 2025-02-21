export const healthcheckTypeDefs = `#graphql
  type Books {
    title: String!
    author: String!
  }

  type Query {
    books: [Books]
  }
`;

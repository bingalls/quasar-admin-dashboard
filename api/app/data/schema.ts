// GraphQL schema in string form
const typeDefs = `
  type Posting {
    href: String
    summary: String
  }
  type Query {
    postings: [Posting]
    posting: [Posting]
  }
  type Mutation {
    createPosting(href: String, summary: String): String
  }
`

export default typeDefs

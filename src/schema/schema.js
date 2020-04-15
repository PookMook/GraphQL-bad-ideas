module.exports = `
type Tweet{
  id:ID!
  text:String!
  author:User!
}

type User {
  id:ID!
  name:String!
  handle:String!
  tweets:[Tweet!]!
}

type Query {
  authors:[User!]!
  tweets:[Tweet!]!
}
type Mutation {
  foo:String
}
type Subscription{
  user:String
}
`
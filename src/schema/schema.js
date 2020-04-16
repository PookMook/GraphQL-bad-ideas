module.exports = `
type Tweet{
  id:ID!
  text:String!
  short:Boolean
  author:User!
}

type User {
  id:ID!
  name:String!
  handle:String!
  tweets:[Tweet!]!
}

type Root {
  slow(time:Int):String!
  authors:[User!]!
  tweets:[Tweet!]!
}
type Stats {
  name:String!
  data:[Stat!]!
}
type Stat {
  name:String!
  value:Int!
}

type Query {
  authors:[User!]!
  tweets:[Tweet!]!
  slow(time:Int):String!
  add(chain:Boolean, base:Int, add:Int!):Int!
  stats(time:Int!, name:String!):Stats!
}
type Mutation {
  slow(time:Int):String!
  root:Root!
  add(chain:Boolean, base:Int, add:Int!):Int!
  stats(time:Int!, name:String!):Stats!
}
type Subscription{
  stats:Stats!
}
`
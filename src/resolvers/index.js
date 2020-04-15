const graph = require('./function')
//const graph = require('./graph2tree')

module.exports = {
  Query: {
    ...graph
  },
  Mutation:{
  },
  Subscription: {
    user: {
      subscribe: (_, args, { pubsub }) => {
        //check if subscription is legit allowed
        const token = veryfy(args.token,args.id)
        return pubsub.asyncIterator(token.id)
      },
    },
  }
}
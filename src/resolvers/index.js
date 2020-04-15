module.exports = {
  Query: {
    hello: (_, args, context)=>{
      return 'world'
    }
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
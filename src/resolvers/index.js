// Function based vs Graph/circular object
const graph = require('./function')
//const graph = require('./graph2tree')

// Async sync resolvers
const slow = require('./slow')

// Parameter Chaining / context hoarding
const add = require('./add')

// Live resolving
const stats = require('./stats')

// Using dataloaders for logic sharing
//const graph = require('./dataloaded')

module.exports = {
  Query: {
    ...graph,
    slow,
    add,
    stats
  },
  Mutation:{
    slow,
    add,
    stats,
    root:()=>{
      return {
        slow,
        ...graph
      }
    }
  },
  Subscription: {
    stats: {
      subscribe: (_, __, { pubsub }) => {
        //check if subscription is legit allowed
        return pubsub.asyncIterator("live")
      },
    },
  }
}
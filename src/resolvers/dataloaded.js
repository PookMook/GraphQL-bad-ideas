const {authors,tweets} = require('../data/data')
const DataLoader = require('dataloader')

// Populate Types

const populateUser = (user) => {
  return {
    ...user,
    tweets:()=>{
      return user.tweets.map(t=>getTweetDL.load(t))
    }
  }
}

const populateTweet = (tweet) => {
  return {
    ...tweet,
    author:()=>getUserDL.load(tweet.author)
  }
}

// Getter functions

// Users

const getUsersByIds = (ids) => {
  //console.log("entering users dataloader with ",ids)
  const response = ids.map(id=>authors[id])


  //console.log("exiting  users dataloader with ",response)
  return new Promise(res => res(response));
}
const getUserDL = new DataLoader(getUsersByIds);

// Tweets

const getTweetsByIds = (ids) => {
  //console.log("entering tweets dataloader with ",ids)
  const intermediary = ids.map(id=>tweets[id])

  const averageLengthOfTweet = intermediary
  .map(t=>t.text.length)
  .reduce((acc,val)=>(acc+val)) / intermediary.length


  const response = intermediary.map(t=>({...t,short:t.text.length<averageLengthOfTweet})).map(populateTweet)
  //console.log("exiting  tweets dataloader with ",response)
  return new Promise(res => res(response));
}
const getTweetDL = new DataLoader(getTweetsByIds);

// Export "graph"

const graph = {
  authors:()=>authors.map(populateUser),
  tweets:()=>tweets.map(populateTweet)
}

module.exports = graph
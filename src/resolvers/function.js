const {authors,tweets} = require('../data/data')

// Populate Types

const populateUser = (user) => {
  return {
    ...user,
    tweets:()=>getTweets(user.tweets)
  }
}

const populateTweet = (tweet) => {
  return {
    ...tweet,
    author:()=>getUser(tweet.author)
  }
}

// Getter functions

const getUser = (id) => {
  console.log("getting user id ",id)
  const selectedUser = authors[id]
  return populateUser(selectedUser)
}

const getTweet = (id) => {
  console.log("getting tweet id:",id)
  const selectedTweet = tweets[id]
  return populateTweet(selectedTweet)
}

const getTweets = (ids) => {
  console.log("getting collection of tweets: ",ids)
  const selectedTweets = ids.map(id => getTweet(id))
  return selectedTweets
}

// Export "graph"

const graph = {
  authors:()=>authors.map(populateUser),
  tweets:()=>tweets.map(populateTweet)
}

module.exports = graph
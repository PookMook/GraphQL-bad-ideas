const {authors,tweets} = require('../data/data')

const populateUser = (user) => {
  console.log("populating ",user)
  return {
    ...user,
    tweets:()=>user.tweets.map(populateTweet)
  }
}

const populateTweet = (tweet) => {
  console.log("populating tweet",tweet)
  return {
    ...tweet,
    author:()=>populateUser(tweet.author)
  }
}

const graph = {
  authors:()=>authors.map(populateUser),
  tweets:()=>tweets.map(populateTweet)
}

module.exports = graph
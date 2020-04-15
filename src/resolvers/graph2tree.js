const {authors,tweets} = require('../data/data')

authors.forEach(a=>{
  a.tweets = a.tweets.map(t=>tweets[t])
})
tweets.forEach(t=>{
  t.author = authors[t.author]
})

// console.log("looking up ",authors[0].tweets[0].author.tweets[0])

const graph = {
  authors:()=>authors,
  tweets:()=>tweets
}

module.exports = graph
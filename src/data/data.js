const authors = [{
  id:0,
  name:"Arthur",
  handle:"@ArthurBienSur",
  tweets:[0,1]
},{
  id:1,
  name:"bob",
  handle:"@Boby",
  tweets:[2]
}]
const tweets = [{
    id:0,
    text:"Hello World",
    author:0
  },
  {
    id:1,
    text:"One more time",
    author:0
  },
  {
    id:2,
    text:"Hello world",
    author:1
  }
]
module.exports = {authors,tweets}
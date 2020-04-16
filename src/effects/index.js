module.exports = {
  liveStats: (stats,pubsub) => {
    console.log("publishing to websocket",stats)
    pubsub.publish("live", { stats: { ...stats } })
  }
}
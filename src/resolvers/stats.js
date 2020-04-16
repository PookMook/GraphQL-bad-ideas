const delay = ms => new Promise(res => setTimeout(res, ms));
const effects = require('../effects/index')

const stats = async (nested,{time,name},{pubsub}) => {
    const msWait = time || nested.time
    await delay(msWait)
    const response = {
        name,
        data:[
            {name:"Arthur", value:Math.round(Math.random()*100)},
            {name:"Alice", value:Math.round(Math.random()*100)},
            {name:"Bob", value:Math.round(Math.random()*100)},
        ]
    }
    console.log("Finish:",response)
    effects.liveStats(response,pubsub)
    return response
}

module.exports = stats
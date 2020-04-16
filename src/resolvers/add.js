const delay = ms => new Promise(res => setTimeout(res, ms));

const add = async (nested,{chain,base,add},ctx) => {
    await delay(Math.round(Math.random()*100))
    const addingTo = chain? ctx.calcOutput || 0:base;
    const result = addingTo + add
    ctx.calcOutput = result
    return result
}

module.exports = add
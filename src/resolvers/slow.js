const delay = ms => new Promise(res => setTimeout(res, ms));

const slow = async (nested,{time}) => {
    const msWait = time || nested.time
    await delay(msWait)
    console.log(`waited ${msWait}ms`)
    return `waited ${msWait}ms`
}

module.exports = slow
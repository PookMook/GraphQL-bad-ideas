module.exports = {
  messageToUser: (event,pubsub) => {
    //Fetch Users in event.channel
    const targetChannel = models.getChannel(event.channel)
    if(targetChannel){
      models.addEvent(event).then(id=>{
        event.id = id
        event.channelName = targetChannel.name
        //populate Author
        event.author = models.getUser(event.author)
        targetChannel.events = [event]
        
        //Dispatch to Each User
        const participants = targetChannel.users
        for(let user of participants){
          pubsub.publish(user.id, { user: { ...event } })
        }
      });
    }
  }
}
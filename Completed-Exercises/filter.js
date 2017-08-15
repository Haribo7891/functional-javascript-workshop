function getShortMessages(messages) {
   var short = messages.filter(function(item){
      return item.message.length < 50;
   }).map(function(item){
       return item.message;
   })
return short;
  }

  module.exports = getShortMessages
const Command = require('./command.js');
const Message = require('./message.js');

class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110
   }
   
   receiveMessage(message) {
           
      let response = {
         message: message.name,
         results: [{completed: true}, {roverStatus: { mode: this.mode, generatorWatts: this.generatorWatts, position: this.position }}],
      }
      
      let prevMode = response.results[1].roverStatus.mode
      let prevCompleted = true
      let prevGenerator = response.results[1].roverStatus.generatorWatts
      let prevPosition = response.results[1].roverStatus.position
      

      for (let i = 0; i < message.commands.length; i++) {

         let j = i +1
   
         response.results[j] = []
         if (message.commands[i].commandType === "MODE_CHANGE") {
            if (prevMode === 'NORMAL'){
               response.results[j] = {completed: !prevCompleted, roverStatus: {mode: 'LOW_POWER', generatorWatts: prevGenerator, position: prevPosition}}
               prevCompleted = !prevCompleted
               prevMode = 'LOW_POWER'
            } else if (prevMode === 'LOW_POWER') {
               response.results[j] = {completed: !prevCompleted, roverStatus: {mode: 'NORMAL', generatorWatts: prevGenerator, position: message.commands[i].value}}
               prevCompleted = !prevCompleted
               prevMode = 'NORMAL'
            }
         } else if (message.commands[i].commandType === 'MOVE' ) {
            if (prevMode === 'LOW_POWER') {
               response.results[j] = {completed: false, roverStatus: {mode: prevMode, generatorWatts: prevGenerator, position: prevPosition}}
            } else {
               response.results[j] = {completed: true, roverStatus: {mode: prevMode, generatorWatts: prevGenerator, position: message.commands[i].value}}
               prevPosition = message.commands[i].value
            }
         } else if (message.commands[i].commandType === 'STATUS_CHECK') {
               response.results[j] = {completed: prevCompleted, roverStatus: {mode: prevMode, generatorWatts: prevGenerator, position: prevPosition}}
         }
      } 
  
      return response
   }
}
module.exports = Rover
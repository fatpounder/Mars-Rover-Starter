class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "Normal";
      this.generatorWatts = 110
   }
   receiveMessage(message) { //message is a Message object
      //updates certain properties of the rover object - see command types table
      let response = {
         message: message.name,
         results: message.commands
      } 



      return response
               //an object containing at least 2 properties: 1. message: the name of the original Message object 
               //2. results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
   }
}

module.exports = Rover;
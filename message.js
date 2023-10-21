const Command = require('./command.js');
class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error("Name required.")
      }
      this.commands = commands;
   }
}
let newCommands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', newCommands);


module.exports = Message

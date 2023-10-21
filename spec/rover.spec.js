const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

console.log(response);


describe("Rover class", function() {
  //Test 7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    expect(rover.position).toBe(98382) 
    expect(rover.mode).toBe("Normal")  
    expect(rover.generatorWatts).toBe(110)
  })
  //Test 8
  it("response returned by receiveMessage contains the name of the message", function() {
    expect(response.message).toBe('Test message with two commands')
  })
  //Test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    expect(response.results).toBe(message.commands)
  })
  //Test 10
  it("responds correctly to the status check command", function() {
    
  })
});

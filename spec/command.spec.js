const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
let moveCommand = new Command('MOVE', 12000);
let statusCommand = new Command('STATUS_CHECK')
let commandArray = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 12000), new Command('STATUS_CHECK')] 

describe("Command class", function() {
  //Test 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
  //Test 2
  it("constructor sets command type", function() {
    expect( function() {commandArray.commandType.toBe("MOVE") || commandArray.commandType.toBe("MODE_CHANGE") || commandArray.commandType.toBe("STATUS_CHECK")})
    
  });
  //Test 3
  it("constructor sets a value passed in as the 2nd argument", function() {
     if (commandArray.commandType === "MOVE") {
       expect(commandArray.value).toBe(Number())
     } else if (commandArray.commandType === "MODE_CHANGE") {
       expect(commandArray.value).toBe(String())
     }

  });

});
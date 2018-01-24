// Workshop - OO JavaScript Mini Challenges: Individual

// Goal:

// To provide practice using object oriented javascript techniques in real world scenarios.

// Assignment:

// Complete the following programming problems

// EXERCISE 1

// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

// create an object called 'multiplier'
// create 2 methods for the object: multiply, getCurrentValue
// multiply should = original number * 1 which will = 'newNumber' then...
// multiply should = original number * newNumber which will = 'newNewNumber'
// create a thing called .getCurrentValue that returns newNewNumber	

// ---------------------------------------------

function Multiplier(){
   this.currentValue = 1;
   this.multiply = function(number){
       this.currentValue = number * this.currentValue;
       // console.log(this.currentValue)
   }
   this.getCurrentValue = function(){
       return this.currentValue
   }
}

var m = new Multiplier()

// ---------------------------------------------

// Practice with Charles:

// var Multiplier = {
// 	runningvalue: 1,
// 	getCurrentValue: function(){
// 		return Multiplier.runningvalue;
// 	},
// 	multiply: function () {
// 		var x = prompt ('Enter a number');
// 		Multiplier.runningvalue *= x
// 		return Multiplier.runningvalue
// 	}
// }
// ---------------------------------------------

// Verbose commented version of Charles' version:

// var Multiplier = {
// // sets an object named Multiplier
// 	runningvalue: 1,
// // creates a property value with a key equal to 1
// 	getCurrentValue: function(){
// // creates a property value with a key equal to a function
// 		return Multiplier.runningvalue;
// // returns the key of the property value ('runningvalue') of the Multiplier object 
// 	},
// 	multiply: function () {
// // creates a property value with a key equal to a function
// 		var x = prompt ('Enter a number');
// // defines a variable x that creates a _____ to prompt the user for a number  
// 		Multiplier.runningvalue *= x
// // 1. sets the property value of 'runningvalue' from the object Multiplier (which is Multiplier.runningvalue) to be multiplied by the variable 'x' (runningvalue initially equals 1 and then that value is "updated" after the user enters a number in the prompt) and then...
// // 2. sets the property value of the object Multiplier.runningvalue to equal the result of the object property value multipied by the number entered (or already stored) by the user (Multiplier.runningvalue = x * Multiplier.runningvalue)
// 		return Multiplier.runningvalue
// // returns the new value of Multiplier.runningvalue after the above has been executed
// 	}
// }
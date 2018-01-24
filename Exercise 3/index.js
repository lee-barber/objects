// Workshop - OO JavaScript Mini Challenges: Individual

// Goal:

// To provide practice using object oriented javascript techniques in real world scenarios.

// Assignment:

// Complete the following programming problems

// EXERCISE 3

// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

// 1. create a prototypical object (named Person)
// 2. extend that object (named Person) to have new objects named
// 'Teacher' and 'Student'.
// 3. each object should have attributes and methods that describe them
// 4. create a new object (named School) that can store data from the
// Student and Teacher objects
// 5. Test the code by creating instances of the objects and confirm they
// can each store the data added


class Person{
	constructor(data1, data2)
		this.data1 = data1;
		this.data2 = data2;
}

class Teacher extends Person{
	constructor(data1, data2)
		this.data1 = data1;
		this.data2 = data2;
}

class Student extends Person{
	constructor(data1, data2)
		this.data1 = data1;
		this.data2 = data2;
}

class School{
	constructor(data1, data2)
		this.data1 = data1;
		this.data2 = data2;
}

// For reference: 

// class Photo{
// 	constructor(description, location){
// 		this.description = description;
// 		this.location = location;
// }
// }
// var pic1 = new Photo('description1', 'location1');

// var pic2 = new Photo('description2', 'location2');

// class Album {
// 	constructor(){
// 		this.photoAlbum = []
// 	}
// 	addPhoto(addingPhoto){
// 		this.photoAlbum.push(addingPhoto)
// 	}
// }

// var photoA = new Album();

// --------------------------------

// For reference:

// class Car{
// 	constructor(make, model, trans, year){
// 		this.make = make;
// 		this.model = model;
// 		this.trans = trans;
// 		this.year = year;
// 		this.shifting = function(){
// 			if(typeof(this.trans) === 'number'){
// 				console.log('this is a stick shift car')
// 			}else {
// 				console.log('this is an automatic car')
// 			}
// 		}
// 	}
// }

// console.log()

// Class Constructor Function with Extends applied: 

// class Vehicle extends Car{
// 	constructor(make, model, trans, year, shifting, wheels){
// 		super(make, model, trans, year, shifting)
// 		this.wheels = wheels
// 	}
// }

// var vehicle = new Vehicle('Volvo', 'S60', '5 speed', '2018', 'manual', 'alloy')

// console.log(vehicle.wheels)
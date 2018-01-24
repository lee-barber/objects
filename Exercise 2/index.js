// Workshop - OO JavaScript Mini Challenges: Individual

// Goal:

// To provide practice using object oriented javascript techniques in real world scenarios.

// Assignment:

// Complete the following programming problems

// EXERCISE 2

// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.

// object model that stores strings
// include an album object that contains photo objects
// each album allows adding new photos, listing photos, and accessing specific photos
// each photo stores the photo's file name and location using strings
// run through each of the objects to confirm it works

// // Constructor function: 

class Photo{
	constructor(description, location){
		this.description = description;
		this.location = location;
}
}
var pic1 = new Photo('description1', 'location1');

var pic2 = new Photo('description2', 'location2');

class Album {
	constructor(){
		this.photoAlbum = []
	}
	addPhoto(addingPhoto){
		this.photoAlbum.push(addingPhoto)
	}
}

var photoA = new Album();


// Class Constructor Function with Extends applied: 

// class Album extends Photo{
// 	constructor(photo, location, photographer){
// 		super(photo, location)
// 		this.photographer = photographer
// 	}
// }

// var ??? = new ('Volvo', 'S60', '5 speed', '2018', 'manual', 'alloy')

// console.log(vehicle.wheels)
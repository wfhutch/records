var myName = "Wayne Hutchinson";

// Create an object that holds your personal information
var myInfo = {
  age: 50,
  last_company: "Self employed",
  marital_status: "Married",
  spouse: "Jill"
};

// Add your name as a new key on the info object
myInfo.name = myName;

console.log(myInfo);

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};

// Create an array that holds records
var recordArray = [Eliminator];

// Add at least two more album objects to the array

var rushBlood = {
  name: "A Rush Of Blood To The Head",
  artist: "Coldplay",
  year: 2002,
  sales: 15000000,
  number_of_hits: 4
}

var morningPhase = {
  name: "Morning Phase",
  artist: "Beck",
  year: 2014,
  sales: 300000,
  number_of_hits: 2
}

recordArray.push(morningPhase, rushBlood);



/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var addRating = function(album, RatingNum) {
    album.rating = RatingNum;
  }

addRating(Eliminator, 7);
addRating(rushBlood, 8);
addRating(morningPhase, 8);

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function (newRating) {
  for (var i = 0; i < recordArray.length; i++) {
    var album = recordArray[i];
       album.rating = newRating; 
  };
};

// Call the function that starts modifying the array
modifyAlbums(9);
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById(records);
/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
var json = JSON.stringify(recordArray); //This works for console.log.  Can see all objects and properties.
console.log(json);                      
// recordDom.innerHTML = json;  
// recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
// Both of these result in an error message that says Cannot set property 'innerHTML' of null.

                                                               




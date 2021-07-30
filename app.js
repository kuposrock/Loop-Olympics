// Write a for loop that prints to the console the numbers 0 through 9.
// Write a for loop that prints to the console 9 through 0.
// Write a for loop that prints these fruits to the console.

for(var i=0;i<10;i++){
    console.log(i);
}
for(var i=9;i>=0;i--){
    console.log(i);
}

const fruits = ["banana", "orange", "apple", "kiwi"]

for (fruit of fruits){
    console.log(fruit);
}

// Write a for loop that will push the numbers 0 through 9 to an array.
// Write a for loop that prints to the console only even numbers 0 through 100.
// Write a for loop that will push every other fruit to an array.
var blankarray = [];
for(var i=0;i<10;i++){
    blankarray.push(i);
}
console.log(blankarray);
for(var i=0;i<=100;i++){
    console.log((i%2==0)?i:"");
}

const thefruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

var everyOtherFruit =[];
for (var i=0; i<thefruits.length;i+=2){
    everyOtherFruit.push(thefruits[i]);
} 
console.log(thefruits);
console.log(everyOtherFruit);

// Write a loop that will print out all the names of the people of the people array
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// Write a loop that pushes every other name to an array starting with the first person
// on, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];

  var nameArray=[];
  var occupationArray=[];

  for(var people of peopleArray){
      console.log(people.name);
      nameArray.push(people.name);
      occupationArray.push(people.occupation);
  }
  console.log(nameArray +"  "+ occupationArray);
  var everyOtherNameArray=[];
  var everyOtherOccupationArray=[];


  for(var i=0; i<peopleArray.length;i+=2){
    everyOtherNameArray.push(peopleArray[i].name);
  }
  for(var i=1; i<peopleArray.length;i+=2){
    everyOtherOccupationArray.push(peopleArray[i].occupation);
}
  console.log(everyOtherNameArray+"   "+everyOtherOccupationArray);
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations


//   Create an array that mimics a grid like the following using nested for loops:
var nestedArray =[];
for(var i =0;i<=2;i++){
    nestedArray.push([]);
    for(var j =0;j<=2;j++){
        nestedArray[i].push(0);
    }
}
console.log(nestedArray);

// Create an array that mimics a grid like the following using nested for loops:

var nestedArray =[];
for(var i =0;i<=2;i++){
    nestedArray.push([]);
    for(var j =0;j<=2;j++){
        nestedArray[i].push(i);
    }
}
console.log(nestedArray);

var nestedArray =[];
for(var i =0;i<=2;i++){
    nestedArray.push([]);
    for(var j =0;j<=2;j++){
        nestedArray[i].push(j);
    }
}
console.log(nestedArray);

for(var array in nestedArray){
    for(var innerValue in nestedArray[array]){
        if(typeof(nestedArray[array][innerValue]) =='number'){
            nestedArray[array][innerValue]='X';
            
        }
    
    }
    
}
console.log(nestedArray);
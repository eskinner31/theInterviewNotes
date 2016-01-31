//Code Examples of High Order functions... Taken from eloquentjavascript
//ABSTRACTING THE FOR EACH method

//First Level

var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

//This would be the plainest approach. While it is functional it
//doesn't exactly hint as to the purpose of this peace of code. All we
//know is that we are going to be looping over an array and logging.


//Second Level

function logEach(array) {  //LogEach allows us to take an array and log it.
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}  // This function is only able to log. We may end up looping over code again the future but this function only has
//one purpose. It's not a bad thing. but it's not very versatile either.

//Third Level

function forEach(array, action) {   //our function forEach takes in an array, and another function as arguments
  for (var i = 0; i < array.length; i++)
    action(array[i]);       //our action parameter is the function that will be acting on each value of the array
} // In this case, we have a function that is designed to give us access to any index of the array.
// It also allows us to use this functionality and apply another function to 'DO' something
// This function has more vesatility than just the log each function and will prevent us from having to repeat ourselves.

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// → Wampeter
// → Foma
// → Granfalloon





//Examples of Common High-Order functions
//Array Methods
var arr = [1,2,3];
var twoAdded = arr.map(function(c,i,a){ //this method takes a callback function to operate on the array that is pass in.
  a[i] = c + 2;
});

//twoAdded = [3,4,5]


arr.forEach(function(e,i,a){ //this method similarly takes a callback to operate on the array passed in .

//Your Code Here.

});

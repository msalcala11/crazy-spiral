var fs = require('fs');

module.exports = {
	print: function (inputArray, cb) {

		// PRELIMINARY VALIDATION

		// First let's check to make sure an array was passed in. If not return an error
		if (!(inputArray instanceof Array))
			return cb("Not an array. Nice try.");

		// Let's make sure the array is a 2d array
		if (!(inputArray[0] instanceof Array))
			return cb("Must be a 2d array");

		// Let's define a global error variable that can be used to stop looping if an input error is detected
		var error = null;

		// CREATE A WRITESTREAM SO WE CAN PRINT THE SPIRAL OUTPUT TO IT

		// Let's "print" to a file rather than via console.log so that we can test the output
		var stream = fs.createWriteStream("spiral_output.txt");

		stream.once('open', function(fd) {

		  	// Now let's traverse the input array as we 
		  	// print to the the file
			traverseArray();
			stream.end(function(){
				cb(error);
			});

		});

		function traverseArray(doneTraversing){

			// This is where the magic happens.

			// Get the number of rows and columns of the 2d array
			var rows = inputArray.length;
			var cols = inputArray[0].length;

			// Lets iterate through the array in clockwise fashion and increment
			// the "round" variable everytime we complete a 360 degree revolution.
			// This will let us keep track of how many rounds we have made around the array

			// Every time we go around the array, the number of rows and columns we'll
			// need to traverse on the next round will get "squezed" by 1 index from each
			// end. The round variable will allow us to perform this squeeze.

			for (round=0; (round < cols-round) && (round < rows-round) && (!error); round++){

				// In each round, we need to go right, then down, then left, then
				// back up again

				// Although the 0 in "0 + round" in the loops below appears uneccessary, it
				// helps convey the purpose of the round variable, which is to "squeeze"
				// the indices traversed based on how far we have ventured into the array

				// Also, note an empty string is appended to perform an implicit 
				// conversion to a string from an number

				// The !error is passed into each for loop to ensure looping stops
				// immediately whenever a validation error occurs

				for(i=round; (i<cols-round) && (!error); i++) // go right
					printValue(inputArray[0+round][i] + "")

				for(i=1+round; (i<rows-round) && (!error); i++) // go down
					printValue(inputArray[i][cols-1-round] + "")

				for(i=cols-1-1-round; (i>0+round) && (!error); i--){ // go left
					// We only need to go left if the array has more than one column
					if(rows>1) 
						printValue(inputArray[rows-1-round][i] + "")
			    }

				for(i=rows-1-round; (i>0+round) && (!error); i--){ // go up
					// We only need to go up if the array has more than 1 row
					if(cols > 1) 
						printValue(inputArray[i][0+round] + "")
				}

			}
		}

		function printValue(value){
			// This function allows us to make sure that the array element being printed is a number before actually
			// printing it

			// Let's check to make sure that what we are printing is a number, and if not, set the global
			// error variable to indicate this has occured. Doing so will cease all looping in traverseArray
			// end exit the overall print function
			if(isNaN(value)){
				error = "Not all values in the input array are numbers.";
			}
			else
				return stream.write(value);
		}
	}
}
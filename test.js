var spiral = require('./spiral.js');
var should = require('should');
var fs = require('fs');

describe("Crazy Spirals", function (done) {

	it("should work for a 1x1 array", function (done){

		// Define the test input
		var inputArray = [
							[1],
						 ]

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code.
		spiral.print(inputArray, function printedACrazySpiral(err){

			// Let's read the file, where the spiral output was printed
			fs.readFile('./spiral_output.txt', "utf-8", function read(err, data) {
			    if (err) {
			        throw err;
			    }

			    // Now let's check to make sure the correct output was printed
			    checkIfSpiralPrintedCorrectly(data);
			});

			function checkIfSpiralPrintedCorrectly(data) {
			    data.should.equal("1");
			    done();
			}

		});

	})

	it("should work for a 2x2 array", function (done){

		// Define the test input
		var inputArray = [
							[1, 2],
							[4, 3],
						 ]

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){

			// Let's read the file, where the spiral output was printed
			fs.readFile('./spiral_output.txt', "utf-8", function read(err, data) {
			    if (err) {
			        throw err;
			    }

			    // Now let's check to make sure the correct output was printed
			    checkIfSpiralPrintedCorrectly(data);
			});

			function checkIfSpiralPrintedCorrectly(data) {
			    data.should.equal("1234");
			    done();
			}

		});

	})
	
	it("should work for a 3x3 array", function (done){

		// Define the test input
		var inputArray = [
							[1, 2, 3],
							[8, 9, 4],
							[7, 6, 5]
						 ]

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){

			// Let's read the file, where the spiral output was printed
			fs.readFile('./spiral_output.txt', "utf-8", function read(err, data) {
			    if (err) {
			        throw err;
			    }

			    // Now let's check to make sure the correct output was printed
			    checkIfSpiralPrintedCorrectly(data);
			});

			function checkIfSpiralPrintedCorrectly(data) {
			    data.should.equal("123456789");
			    done();
			}

		});

	})

	it("should work for a 3x4 array", function (done){

		// Define the test input
		var inputArray = [
							[1,  2,  3,  4],
							[10, 11, 12, 5],
							[9,  8,  7,  6]
						 ]

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){

			// Let's read the file, where the spiral output was printed
			fs.readFile('./spiral_output.txt', "utf-8", function read(err, data) {
			    if (err) {
			        throw err;
			    }

			    // Now let's check to make sure the correct output was printed
			    checkIfSpiralPrintedCorrectly(data);
			});

			function checkIfSpiralPrintedCorrectly(data) {
			    data.should.equal("123456789101112");
			    done();
			}

		});

	})

	it("should work for a 1x4 array", function (done){

		// Define the test input
		var inputArray = [
							[1,  2,  3,  4],
						 ]

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){

			// Let's read the file, where the spiral output was printed
			fs.readFile('./spiral_output.txt', "utf-8", function read(err, data) {
			    if (err) {
			        throw err;
			    }

			    // Now let's check to make sure the correct output was printed
			    checkIfSpiralPrintedCorrectly(data);
			});

			function checkIfSpiralPrintedCorrectly(data) {
			    data.should.equal("1234");
			    done();
			}

		});

	})

	it("should work for a 4x1 array", function (done){

		// Define the test input
		var inputArray = [
							[1],
							[2],
							[3],
							[4],
						 ]

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){

			// Let's read the file, where the spiral output was printed
			fs.readFile('./spiral_output.txt', "utf-8", function read(err, data) {
			    if (err) {
			        throw err;
			    }

			    // Now let's check to make sure the correct output was printed
			    checkIfSpiralPrintedCorrectly(data);
			});

			function checkIfSpiralPrintedCorrectly(data) {
			    data.should.equal("1234");
			    done();
			}

		});

	})

	it("should work for a 4x2 array", function (done){

		// Define the test input
		var inputArray = [
							[1, 2],
							[8, 3],
							[7, 4],
							[6, 5],
						 ]

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){

			// Let's read the file, where the spiral output was printed
			fs.readFile('./spiral_output.txt', "utf-8", function read(err, data) {
			    if (err) {
			        throw err;
			    }

			    // Now let's check to make sure the correct output was printed
			    checkIfSpiralPrintedCorrectly(data);
			});

			function checkIfSpiralPrintedCorrectly(data) {
			    data.should.equal("12345678");
			    done();
			}

		});

	})

	it("should throw an error if an anything other than an array was passed in", function (done){

		// Define the test input as an invalid input
		var inputArray = "Not an array suckahhhh!!"

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){
			err.should.equal("Not an array. Nice try.");
			done();
		});

	})

	it("should throw an error if only a 1d array is passed in", function (done){

		// Define the test input as an invalid input
		var inputArray = [1, 2, 3];

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){
			err.should.equal("Must be a 2d array");
			done();
		});

	})

	it("should throw an error if a any of the inputs are not numbers", function (done){

		// Define the test input as an invalid input
		var inputArray = [
							[1, 2, {badObject: "dkjfd"}],
						 ]

		// Now let's run the function we are testing. It must be asynchronous, since we are
		// streaming to a text file as we traverse the array. Streaming to a test file
		// rather than using console.log allows us to test our code
		spiral.print(inputArray, function printedACrazySpiral(err){
			err.should.equal("Not all values in the input array are numbers.");
			done();
		});

	})
})
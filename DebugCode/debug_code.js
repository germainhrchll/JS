	
	function performOperation() {
	// Get user input from input fields
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
	// Perform the operation
					let result1 = multiply(num1, num2);
                    let result2 = additionne(num1, num2);
                    let result3 = divise(num1, num2);

					// Display the result
					displayResult(`Multiplication: ${result1} | Addition: ${result2} | Division: ${result3}`);
				} else {
					displayResult('Please enter valid numbers');
				}
			}

			function multiply(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// Multiply the numbers
				return a * b;
			}
            function additionne(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// additionne the numbers
				return a + b;
			}
            function divise(a, b) {
				// Introduce a debugger statement to pause execution
				debugger;

				// Divise the numbers
				return a / b;
			}

			function displayResult(result) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('result');
				resultElement.textContent = `The result is: ${result}`;
			}
		

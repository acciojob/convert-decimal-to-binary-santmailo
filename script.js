function decimalToBinary(num) {
	  // Check if the input is a non-negative integer
  if (Number.isInteger(decimalNumber) && decimalNumber >= 0) {
    // Special case for 0
    if (decimalNumber === 0) {
      return '0';
    }

    // Convert decimal to binary
    let binaryResult = '';
    while (decimalNumber > 0) {
      // Get the remainder when dividing by 2
      const remainder = decimalNumber % 2;
      // Add the remainder to the left of the result
      binaryResult = remainder + binaryResult;
      // Update the decimal by dividing it by 2
      decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binaryResult;
  } else {
    // Invalid input, return an error message or handle accordingly
    return 'Invalid input. Please provide a non-negative integer.';
  }
}
// const num = parseInt(prompt("Enter a number."));
// alert(decimalToBinary(num));

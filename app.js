// qustion 

// function User(user) {
//      const user = Aizaz
//      console.log("Wellcome, : ${user}")
//     console.log(`wellcome: ${user}`);
// }
// let user = ("Arsalan")
// console.log(`well come to  ${user}`);

// qusetion 2

// function calculateSquare(number) {
//       return number * number;
// }

// // Example usage
// let num1 = 5;
// let num2 = 8;

// let result1 = calculateSquare(num1);
// let result2 = calculateSquare(num2);
//  console.log(`The square of ${num1} is ${result1}`);
// console.log(`The square of ${num2} is ${result2}`);

// question3

// function greetUser(firstName, lastName) {
//           const fullName = `${firstName} ${lastName}`;
//           console.log(`Hello, ${fullName}! Welcome.`);
//     }
    
//     // Example usage
//     const userFirstName = prompt("enter your name");
//     const userLastName = prompt("enter your name");
//     greetUser(userFirstName, userLastName);

// question4

// function addTwoNumbers() {
//       let num2 = parseFloat(prompt("Enter the first number:"));
//       let num3 = parseFloat(prompt("Enter the second number:"));

//       if (isNaN(num2) || isNaN(num3)) {
//             return "Invalid input. Please enter valid numbers.";
//       }

//       let multi = num2 * num3;
//       return multi;
// }

// let result = addTwoNumbers();
// console.log(`The multiplication of the two numbers is: ${result}`);



// question

function calculate(num1, num2, operator) {
    let result;
    if (operator == "+") {
          result = num1 + num2;
          console.log(result);
    }
    else if (operator == "-") {
          result = num1 - num2;
          console.log(result);
    }
    else if (operator == "/") {
          result = num1 / num2;
          console.log(result);
    }
    
    else if (operator == "*") {
          result = num1 * num2;
          console.log(result);
    } 
    
    
    else if (operator == "%") {
          result = num1 % num2;
          console.log(result);
    }
    else {
          console.log("not an operator");

    }

    return `Result: ${result}`;
}

// Example usage
let num1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter the operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter the second number:"));


let results = calculate(num1, num2, operator);
document.write(results);

    
    


// question5





// function square(number) {
//       return number * number;
// }

// // Example usage
// const result = square(prompt("Enter the value"));
// console.log(result); // Outputs: 25


// Question num
// function factorial(number) {
//       if (number === 0 || number === 1) {
//           return 1;
//       } else {
//           return number * factorial(number - 1);
//       }
//   }
  
//   // Example usage
//   let num = parseInt(prompt("Enter a number:"));
//   let result = factorial(num);
  
//   console.log(`The factorial of ${num} is: ${result}`);

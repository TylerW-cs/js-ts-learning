// =====================================================
// Block scope and shadowing (let vs var)
// =====================================================

// Outer variable: exists everywhere in this file.
var messageText = "Welcome to Textio!";

// const: can't be reassigned. Holds true or false (a boolean).
const isBirthday = true;

// isBirthday is true, so the code inside the { } runs.
if (isBirthday) {
  // NEW, separate variable with the same name.
  // Because it uses `let`, it only exists inside this block.
  // It hides the outer messageText here — this is called SHADOWING.
  let messageText = "Happy Birthday!";

  console.log("Sending birthday message...");
  console.log("Message:", messageText); // uses the inner one → "Happy Birthday!"
} // the inner messageText stops existing here

console.log("Sending welcome message...");
console.log("Message:", messageText); // only the outer one is left → "Welcome to Textio!"

// Output:
// Sending birthday message...
// Message: Happy Birthday!
// Sending welcome message...
// Message: Welcome to Textio!

// WHY IT MATTERS:
// If the line inside the block used `var` instead of `let`, it would NOT
// create a new variable. `var` ignores block scope, so it would OVERWRITE
// the outer messageText, and the last line would wrongly print
// "Happy Birthday!". That's why we avoid `var`.

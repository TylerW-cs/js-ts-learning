## Variables

const name = "Tyler"; // can't be reassigned — use by default
let count = 0; // can be reassigned
count = 1;
var old = "avoid"; // old way — don't use

Rule: use `const` unless the value needs to change, then `let`. Never `var`.

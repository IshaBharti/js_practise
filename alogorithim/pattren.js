let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i <= n; i++) { // external loop
  for(let j = 0; j < i; j++) { 
	if (i%2!=0){// internal loop
    string += "*";
  }}
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
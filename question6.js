function fact(n) 
{
  n = Number(n);
  let result=1;
  for(let i=n;i>0;i--)
  {
    result*=i;
  }
  return result;
}
const prompt = require('readline-sync');

// Use .question() instead of prompt()
let num = prompt.question("Enter a number to find its factorial: ");

// Convert the string input to a number
num = parseInt(num);
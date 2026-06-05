console.log('=== VAR HOISTING ===\n');
console.log('x before assignment:', x);
var x = 5;
console.log('x after assignment:', x);
console.log('\n=== FUNCTION HOISTING ===\n');
sayHi();
function sayHi()
 {
  console.log('Hello!');
}
console.log('\n=== FUNCTION EXPRESSION (Does NOT hoist the same way) ===\n');
try 
{
  greet();
} catch (error) 
{
  console.log('Error: greet is not a function (it\'s undefined)');
}

var greet = function() {
  console.log('Hi there!');
};
greet();
console.log('\n=== SUMMARY ===\n');
console.log('1. VAR variables are hoisted as undefined');
console.log('2. FUNCTION declarations are fully hoisted');
console.log('3. FUNCTION expressions are NOT hoisted like declarations');

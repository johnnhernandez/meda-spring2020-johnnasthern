function adder(num1, num2) {
    return num1 + num2;
    }
    
    console.log(   adder(100, "Tony") );
    /* 100 and Tony get sent to the Adder function
1) 100 and Tiny get sent to the Adder fucntion.
2) Adder function runs, and places 100 and Tony, into num1 and num2.
3) Before we return a value, we need to add/ concatenate. We call num1 and num2 variables for its values, and then add/concatenate them together.
4) The return keyword says that we will return this single value back to whereever the function was called.
5) The adder function has a returned "100Tony" as a single string and is replaced by that value.
6) Because this value is inside of the console.log arguements area, it will be sent off to the console.log function
*/



function taxCalculator(itemPrice) {
    
    var tax = itemPrice * .085;
    
    var taxedFixedToTwoDecimalPlaces = tax.toFixed(2);
    var taxNumber = parseInt(taxedFixedToTwoDecimalPlaces);
    return taxedFixedToTwoDecimalPlaces;
    
}



// parseInt();

var laptopPrice = 999.95;
var laptopTax = taxCalculator(laptopPrice);
console.log("Price of item: $" + laptopPrice + ". Tax on item: " + laptopTax + ". Total Cost: $" + (laptopPrice + laptopTax) + ".")





/*
Create a function called mathifier

This function will take two Numbers

With these two numbers, you will add them, then add the sum to the first number, and then multiply that by the second number.

The function will return the result.
*/

function projectAlfa(){
    var numberSpecial1 = (2 + 24)
    return numberSpecial1
    
}
console.log ( projectAlfa ())



function mathifier(num1, num2){
    var sum = num1 + num2;
    
    var newSum = sum + num1;
    
    var product = newSum * num2;
    
    return product;
}







/*
This function will be called mathResults

This function takes only 2 numbers.

This function will console.log Each of the following:
The sum of these two numbers.
The difference of these two numbers.
The dividand of thse two numbers.
The leftovers of these two numbers. (modulo)

Bonus: each console.log will tell me what tht number is about.

*/


function mathResults( num1, num2){

 console.log(sum);
 var sum = num1 + num2;
 
 var sub = num1 - num2;
 
 var div = num1 / num2;
 
 var product = num1 * num2;
 
 var num1= 2
 var num2= 2
 
 } 
 
 
 function mathResults1( num1, num2){
     console.log(num1 + num2)
     
     console.log(num1 - num2)
     
     console.log(num1 * num2);
     
     console.log(num1 / num2) ;
     
     console.log( remainder);
     
 }
 console.log(mathResults1( 2,3) )
 
 

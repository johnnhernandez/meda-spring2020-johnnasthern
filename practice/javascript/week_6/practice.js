//Concatenation example

"a word" + "name";
"a number" + 100;
console.log("hello" + true);
console.log(100 + " a number");
console.log(100 +100 + 100 + "hello");
console.log("hello " + 100 + 100 +100);


function sentenceBuilder(person, place, action, item,){
    var firstPart = " went to the " ;
    var secondPart = " , and did " ;
    var thirdPart = " but there was a problem, " ;
    var fourthPart = " did not work ";
    
    var completeSentence = person + firstPart + place + secondPart + action + thirdPart + item + fourthPart;
  
    console.log(completeSentence);
}

sentenceBuilder("Osiah", "Happy Donut", "fought with the store owner", "the fists");

sentenceBuilder("David", "Six Flags", "took a ride on the Ferris Wheel", "the hydraulics")







function getNumber() {
    var theSpecialNumber = 42;
    
    return theSpecialNumber;
}


console.log( getNumber() );


var newNumber = getNumber() + 100;

console.log(newNumber); 

var results = getNumber() /50;

console.log( getNumber() / 50);



function getName() {
    var firstName = "Eduardo"
    
    
    return firstName;
}

console.log( getName() + " is a person. ");





// Exercise
// In the console, declare the following functions:

// multiply: given 2 numbers, return their product
// yell: given a lowercase string, log it in all caps to the console
// longerThan: given 2 arrays, return whether the first is longer than the second

function multiply(number1,number2){
    return number1*number2;
}

function yell(string){

  
    return string.toUpperCase();

}

yell("asdasdasd")

function longerThan(array1,array2){

   if(array1.length == array2.length){

    console.log("bu iki dizi de esit uzunkukta");
    return `${array1} == ${array2}`;

   }

   else if(array1.length>array2.length){

    return array1;

   }

   else { return array2}

}

dizi1 = [1,2,23,12,314,23,423,4]

dizi2 = [12,312,312,41,1,1,1,1]

buyukdizi = longerThan(dizi1,dizi2)

console.log(buyukdizi) 

//------------------------------------------------

// Exercise
// In the console, declare the following functions using arrow functions:

// divide: given 2 numbers, return the first divided by the second
// whisper: given an uppercase string, log it in all lowercase to the console
// shorterThan: given 2 arrays, return whether the first is shorter than the second


const divide = (n1,n2) => n1/n2;

console.log(divide(6,3));

const whisper = (string) => string.toLowerCase();

console.log(whisper("kjabdjsdnfSGJSDFJS"))

const shorterThan = (array1,array2) => array1.length>array2.length;

aDizi1 = [1,1,2]

aDizi2 = [1,4]

console.log(shorterThan(aDizi1,aDizi2))



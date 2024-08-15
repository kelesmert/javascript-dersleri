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


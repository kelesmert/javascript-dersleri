const books = [
    {
        "name":"age",
        "peki":"2tane"

    },
    {
        "mert":"26"

    },
    {
        "mert":"26"

    }


];

let iteration = 0;


// let b = Object.keys(books[iteration]);
// console.log("bu b",b)


function bul (x){


    let arrayLength = Object.keys(x).length;
    let b = Object.keys(books[iteration]);
    console.log("bu bbbbbbb",b)

    // bu kodun calismama sebebi asagida iteration 1 eklendiginde en sin 3 oluyor bu index de dizide yok.

    if (iteration < arrayLength){

        // console.log("dizinin uz",arrayLength)
        console.log(iteration)
        console.log(Object.keys(x[iteration]));
        //  console.log(b);     
        iteration += 1   
        bul(x) 

    }

    else  {console.log("dizi bitti")};
};

// console.log(arrayLength)

bul(books)

// let baslangic = 0;
// function bul (x){


//     let arrayLength = (Object.keys(x).length);
//     let b = (Object.keys(x)[baslangic])

//     console.log(b)

//     if (baslangic <= arrayLength){

//         console.log("dizinin uz",arrayLength)
//         baslangic += 1
//         console.log(baslangic)
//         bul(x) 
        
//     }

//     else  {console.log("dizi bitti")};
// };

// console.log(arrayLength)

// bul(books)

// console.log(a)


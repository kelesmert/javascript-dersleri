// dongu veya method kullanmadan arraylerle iterasyon yapilmasi (recursion)
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

let index = 0;

function findAuthor (array){
 
    if (index < books.length){
        
        console.log(`${index} indexli array = `,array[index]);
        index += 1; 
        findAuthor(array) ;

    }

    else  {console.log("dizi bitti")};
};

findAuthor(books)



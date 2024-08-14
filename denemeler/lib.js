// Soru: Bir kitap okuma izleme uygulaması oluşturduğunu düşün. Kullanıcının okuduğu kitapları takip etmesi için bir sistem tasarla. Bu sistemde aşağıdaki özellikler olmalı:

// Kullanıcılar bir kitap okuduğunda, kitabın adını, yazarını ve sayfa sayısını girebilmeli.
// Kullanıcılar okudukları kitapların bir listesini görebilmeli.
// Kullanıcılar isterlerse bir kitabı listeden silebilmeli.
// Her kitabın detaylarını görüntüleyebilmeliler (kitap adı, yazar, sayfa sayısı).


const prompt = require('prompt-sync')();




const books = [
    {
        "author":"yazar1",
        "name" : ["kitap1","kitap2"],
        "pages" : ["sayfa1","sayfa2"]

    }

    
];



const users = [
    {
        "name": "",
        "surname": "",
        "readedBooks" : [books]



    }



];


function authorExists(){

    const isAuthorExists = books.find(function(x){

        return b

    })



}

function addBook(){

    let author = prompt(`yazar giriniz : `)

    let bookName = prompt(`kitapadi giriniz : `)

    let bookPages = prompt(`kitapsayfa giriniz : `)

    if (author ==  books.author) {
        books.push( 
            {
                
                "author":author,
                "name" : bookName,
                "pages" : bookPages

            });

    };

}


console.log(books);

addBook();


console.log(books);

addBook();

console.log(books);


// kitap eklerken books arrayine bakacak.Girilen yazar adi var mi diye kontrol edilmesi lazim 



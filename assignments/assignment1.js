// const prompt = require('prompt-sync')();


const prompt = require('prompt-sync')();


// Assignment - 1

// 1- Bir kullanıcıdan adını ve yaşını alın. Ardından, bu bilgileri kullanarak "Merhaba, [ad]! Sen [yaş] yaşındasın." şeklinde bir çıktı üreten JavaScript kodunu yazın.

    let ad = prompt(`adinizi giriniz : `)

    let yas = prompt(`yasinizi giriniz : `)

    console.log(`merhaba ${ad},sen ${yas} yasindasin.`)


// 2- Bir değişken tanımlayarak bir sayıyı saklayın ve bu sayıyı 2 ile çarpıp sonucu ekrana yazdıran bir JavaScript programı yazın.

    // const pi = 3.14

    // let sayi = parseFloat(prompt(`Pi sayisini kacla carpmak isterinin? : `));

    // isNaN(sayi) ? console.log(`lutfen sadece sayi gir`) : console.log((pi*sayi).toFixed(2));

    //degiskenlere atayip islemi fonksiyon olarak tanimlamak daha dogru ama simdilik kafi


// 3- Bir kullanıcıdan bir sayı alın ve bu sayının pozitif, negatif veya sıfır olduğunu belirleyen bir JavaScript programı yazın.

    // let sayi = prompt(`sayi gir : `)

    // let kontrol = 
    //     sayi > 0 ? `${sayi} sayisi pozitiftir` :
    //     sayi < 0 ? `${sayi} sayisi negatiftir` :
    //     sayi == 0 ? `${sayi} sayisi notrdur`:
    //     `${sayi} bir sayi degildir`;
    // console.log(kontrol)



// 4- Verilen iki string'i birleştirerek bir cümlenin sonucunu oluşturan JavaScript kodunu yazın.

    // let kelime1 = prompt(`1.metni giriniz: `);

    // let kelime2 = prompt(`2.metni giriniz : `);

    // let cumle = `${kelime1} ${kelime2}`;

    // console.log(cumle);

// 5- Verilen bir string'in uzunluğunu bulan ve bu uzunluğu ekrana yazdıran bir JavaScript programı yazın.

//     let input = prompt(`metin giriniz : `);

//     let kelime = input.split(" ")
    
//     // kelimeyi bosluklara gore ayirip array olusturdu.Her eleman bir kelime

//     let harf = input.replace(/ /g,"")

//     // inputtaki bosluklari kaldirdir detay icin regex bak 1.ifade aranilan 2.ifade degistirelecek ifade

//     console.log(`metindeki kelime sayisi: ${kelime.length}
// metindeki harf sayisi : ${harf.length}
// bosluklar dahil harf sayisi : ${input.length}`);
//     // inputta sona bosluk koyulursa da bunu sayiyor


// 6- İki sayıyı karşılaştıran ve hangisinin daha büyük olduğunu belirleyen bir JavaScript programı yazın.

    // let sayi1 = parseFloat(prompt(`sayi1 gir : `))
    // let sayi2 = parseFloat(prompt(`sayi2 gir: `))

    // let kontrol = 
    //     sayi1 > sayi2 ? `${sayi1} sayisi ${sayi2} sayisindan daha buyuktur` :
    //     sayi2 > sayi1 ? `${sayi1} sayisi ${sayi2} sayisindan daha kucuktur` :
    //     `${sayi1} ile ${sayi2} esittir`;
    
    // console.log(kontrol)

// 7- Bir kullanıcının yaşını ve ehliyet durumunu kontrol eden bir JavaScript programı yazın. Ehliyet yaşı 18 ise ve kullanıcı 18 yaşından büyükse, "Ehliyet alabilirsiniz." aksi takdirde "Ehliyet alamazsınız." mesajını yazdırın.

    // let yas = parseInt(prompt(`yasinizi giriniz : `))

    // let kontrol = yas >= 18 ? console.log(`ehliyet alabilirsiniz`) : console.log(`su an ehliyet alamazsiniz${18-yas} yil sonra alabilirsiniz`)

// 8- Verilen bir koşulun doğru veya yanlış olduğunu kontrol eden bir JavaScript programı yazın. Koşul doğruysa "Koşul doğru" mesajını yazdırın, aksi takdirde "Koşul yanlış" mesajını yazdırın.

    // let soru = prompt(`tayyip orospu cocugu mudur?(e/h) : `)

    // switch(soru) {
    //     case 'e':
    //         console.log(`tebrikler silivri bileti kazandiniz`)
    //         break
    //     case 'h':
    //         console.log(`sus lan çöl bedevisi`)
    //         break
    //     default:
    //         console.log(`duzgun secim yap`)
    // }



// 9- Verilen bir sayının çift veya tek olduğunu kontrol eden bir JavaScript programı yazın. Sayı çiftse "Sayı çift" yazdırın, aksi takdirde "Sayı tek" yazdırın.

    // let sayi = parseInt(prompt(`sayi gir: `))
 
    // let kontrol =
    //  isNaN(sayi) ? console.log(`sayi degil`) : 
    //  sayi%2 === 0 ? console.log(`sayi cifttir`) : console.log(`sayi tektir`);



// 10- Bir kullanıcının yaşını ve adını alan ve 18 yaşından büyükse ve adı "Ahmet" ise "Hoş geldin, Ahmet!" mesajını yazdıran bir JavaScript programı yazın. Aksi takdirde "Üzgünüz, yaşınız veya adınız uygunsuz." mesajını yazdırın. 

    //ehliyet sorusuyla ayni ugrasmicam



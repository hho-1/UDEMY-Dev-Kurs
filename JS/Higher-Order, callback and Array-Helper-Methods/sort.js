const isimler = ["emre", "ali", "hasan", "ayse"]
const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3]

const ogrenciler = [
    {id: 12, isim: 'emre', yas: 25},
    {id: 22, isim: 'hasan', yas: 15},
    {id: 32, isim: 'fatma', yas: 55},
    {id: 13, isim: 'nuriye', yas: 19},
    {id: 92, isim: 'kemal', yas: 45},
    {id: 15, isim: 'mustafa', yas: 75},
    {id: 44, isim: 'ceren', yas: 30}
]


/* const alfabetikSira = isimler.sort()
console.log(alfabetikSira);
console.log(isimler);                    //orijinal diziyi de siralamis


const terstenSirala = alfabetikSira.reverse();        //tersten siralamis
console.log(terstenSirala); 


//tek satirda??

const kisa = isimler.sort().reverse()
console.log(kisa);*/



/* const sirali = sayilar.sort((a,b) => a - b)
console.log(sirali);

const terstenSirali = sayilar.sort((a,b) => b - a)
console.log(terstenSirali); */


//ogrenciler.sort((a, b) => a.id - b.id)            //id'ye göre sirala
//console.log(ogrenciler);

ogrenciler.sort((a, b) => {
    return (a.isim < b.isim) ? -1 : (a.isim > b.isim ? 1 : 0)              //isme göre siraladik. tersini istersen -1 ile 1'i yer degistir
})            
console.log(ogrenciler);



// Asil dizimiz degismesin istiyorsak diziyi kopyalamamiz lazim

// 1. yol
let kopya = []

for(let isim of isimler){
    kopya.push(isim)
}

kopya.sort()

console.log(kopya);
console.log(isimler);


//2. yol
let kopya2 = Array.from(isimler)            // Bu da kopyalar


//3. yol

let kopya3 = [...isimler]                // spread operatörü
console.log(kopya3.sort());


const adSoyad = "Necati Karakulak"

let harfler = adSoyad.split('')            // Harf harf böler
console.log(harfler);

let harfler2 = [...adSoyad]                // Ayni isi yapar   
console.log(harfler2);


function sayilariTopla (...parametreler){
    console.log(parametreler);

    let toplam = 0;
    for(let s of parametreler){
        toplam += s;
    }
    console.log(toplam);
}

sayilariTopla(1,2,3,4,5,6)
sayilariTopla(1,2,3,4)
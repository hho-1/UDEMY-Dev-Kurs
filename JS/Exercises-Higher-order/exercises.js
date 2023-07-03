const numbers = [1,2,3,4,5,6,7,8,9]

// üstteki dizideki tek sayilari ayri bir diziye atayin
// Sonra bunlarin karelerini bulun
// Bu son dizinin elemanlarinin 10'dan büyük olanlari toplatin

function sonucuBul(sayilar){
    const odds = sayilar.filter((num) => {
        return num % 2 === 1;
    })
    
    console.log(odds);
    
    const squares = odds.map((num) => num**2)
    console.log(squares);
    
    const total = squares.reduce((sum, num) => {
        if(num > 10){
            sum = sum + num;
        }
        return sum;
    
    }, 0)
    
    console.log(total);
}

sonucuBul(numbers)

function shortVersion(sayilar){
    return sayilar.filter((sayi) => sayi % 2 !== 0)
                    .map((num) => num**2)
                    .reduce((sum, num) => num > 10 ? sum = sum + num : sum, 0);
    
}

console.log(shortVersion(numbers));


// SORU-1: Sehirler diye bir dizi olusturun. Bu diziler sehirlerle ilgili bilgiler icersin. Isimlere göre z'den a'ya siralayin

let sehirler = [
    {isim: "Ankara", plaka: "06", komsu: "kirikkale"},
    {isim: "Izmir", plaka: "35", komsu: "manisa"},
    {isim: "Corum", plaka: "19", komsu: "kirikkale"},
    {isim: "Trabzon", plaka: "61", komsu: "rize"},
    {isim: "Batman", plaka: "66", komsu: "mardin"},
    {isim: "Bartin", plaka: "71", komsu: "zonguldak"},
    {isim: "van", plaka: "65", komsu: "mus"},
]

let sehirlerAlfabetik = sehirler.sort((a,b) => {                  //sort'un icine fonksiyon girdigine dikkat et!!!
    return (a.isim < b.isim) ? 1 : (a.isim > b.isim ? -1 : 0)
})
console.log(sehirlerAlfabetik);


// SORU-2: Verilen bir sayi kadar fibonacci dizisini yazdirin

function fibonacci(sayi){
    

    let sonucDizi = [0, 1]
    for(let i = 2; i < sayi; i++){
        sonucDizi[i] = sonucDizi[i-1] + sonucDizi[i-2]
    }
    return sonucDizi;


}
console.log(fibonacci(+prompt("Sayi giriniz: ")));

// SORU-3: Ögrenciler isimli bir dizi olustur. ID no, ad ve soyad olsun dizide.
// ID numarasi cift olanlarin ad ve soyadini birlestirip alfabetik siralayarak ekrana yazdir

const students = [
    {id: 12, ad: "salih", soyad: "tezcan"},
    {id: 13, ad: "salim", soyad: "berkcan"},
    {id: 14, ad: "tahir", soyad: "ünlü"},
    {id: 15, ad: "mehmet", soyad: "yilmaz"},
    {id: 62, ad: "esra", soyad: "yazgan"},
    {id: 195, ad: "hatice", soyad: "yildirim"},
    {id: 123, ad: "meryem", soyad: "uzun"},
    {id: 172, ad: "cansu", soyad: "kisa"},
    {id: 129, ad: "sami", soyad: "kirmizi"},
    {id: 102, ad: "cemsit", soyad: "sari"},
    {id: 121, ad: "hursit", soyad: "mavi"}
]

const result = students.filter((student) => student.id % 2 === 0).map((x) => `${x.ad} ${x.soyad}`).sort();
console.log(result);
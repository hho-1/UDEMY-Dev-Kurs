function Person(ad, soyad){
    this.ad = ad;
    this.soyad = soyad;
}

Person.prototype.selamver = function(){
    return `Merhaba ben ${this.ad} ${this.soyad}`
}

const emre = new Person('emre', 'altin')

console.log(emre.selamver());


function Ogrenci (ad,soyad, yas, sinif){
    
    Person.call(this, ad, soyad)      // this ile yazmak yerine oradan cagirdik
    this.yas = yas;
    this.sinif = sinif;
}

Ogrenci.prototype = Object.create(Person.prototype)      // prototypelari esledik
Ogrenci.prototype.constructor = Ogrenci;

Ogrenci.prototype.selamver = function(){
    return `Merhaba ben ${this.sinif}. sinifa giden ${this.ad} ${this.soyad}`
}

const ayse = new Ogrenci('ayse', 'fatma', 21,9)
console.log(ayse.selamver());


//burada ogrenci ayni zamanda bir person oldugu icin kodu kisaltabiliriz


Ogrenci.prototype.yasiniSoyle = function(){
    return `Merhaba ben ${this.yas} yasindayim`
}


function MyArray(){

}
MyArray.prototype = Object.create(Array.prototype)

const myArray = new MyArray();         //myArray'i primitive olarak tanimladik ama fonksiyona bagladik

myArray.push(1232)                    // Üstte Array prototypleri ile esledigimiz icin array metodlarini miras aldi
console.log(myArray);

// Asagiya dikkat !!!!!!!

const dizim = [1,2,3]
const karesiniAl = dizim.map((sayi) => {
    return sayi**2;
})
console.log(karesiniAl);    // [1,4,9] verir

Array.prototype.kendiMapYapim = function(islem){       // Burada javascripte diyoruz ki, sende array icin var olan fonksiyonlara bir de benim bu fonksiyonumu ekle, cagirdigimda gönder gelsin
    const yeniDizi = []
    for (let i = 0; i < this.length; i++){
        yeniDizi.push(islem(this[i], i))
    }
    return yeniDizi;
}

const myYeniDizi = dizim.kendiMapYapim((sayi) => {
    return sayi ** 2;
})

console.log(myYeniDizi);    // [1,4,9]

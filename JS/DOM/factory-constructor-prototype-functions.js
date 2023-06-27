
//************************* Factory functions ******************* */ 
// Ayni objeden cok sayida uretmek icin gelistirilen bir kolaylik yöntemi

function createStudent(ad, yas, evliMi, okul){
    return {
        isim: ad,
        yas, yas,
        evliMi: evliMi,
        okuduguokul: okul,
        bilgileriGoster: function(){
            return `ismim ${this.isim} yasim ${this.yas} ve okulum ${this.okuduguokul}`
        }
    };
}

const emre = createStudent('emre', 32, false, 'ITU')
const hasan = createStudent('hasan', 33, true, 'ODTU')


//console.log(emre);
//console.log(hasan);

//console.log(emre.bilgileriGoster());
//console.log(hasan.bilgileriGoster());


/******************    CONSTRUCTOR KULLANIMI  ******************** */

function Ogrenci(ad, yas, evliMi, okul){
    this.isim = ad;
    this.yas = yas;
    this.evliMi = evliMi;
    this.okuduguokul = okul;
    this.bilgileriGoster = function(){
        return `ismim ${this.isim} yasim ${this.yas} ve okulum ${this.okuduguokul}`
    }
    console.log(this);          // Bu objeyi komple yazdirir
}

console.log(this);              // Bu this ise koomple windowu yazdirir, cunku fonksiyonun disinda

const yunus = new Ogrenci('yunus', 30, false, 'BOUN')   // Bunun adi yukaridaki objeden olusturulan bir instance
//console.log(yunus);                                  // Üste new koymazsan obje olusmaz, Burasi hata verir

// new koyarsan 4 sey olur:

// 1- Yeni bir obje olusur
// 2- return yazmak zorunda kalmayiz
// 3- this kelimesini o anda olusturulan objeye baglar.

console.log(yunus.constructor);
const yeni = new yunus.constructor('yeni', 35, 'ITU');       // Bu da yunustan 1 adet yeni obje olusturur

/*

Bir üstteki kod sunu verir:

Ogrenci(ad, yas, evliMi, okul){
    this.isim = ad;
    this.yas = yas;
    this.evliMi = evliMi;
    this.okuduguokul = okul;
    this.bilgileriGoster = function(){
        return `ismim ${this.isim…


Yani yunustan 1 obje olusturmak icin senin su girdilere ihtiyacin var demek
*/

const denemeObject = {};
console.log(denemeObject.constructor());        // Native kodla yazilmis bir constructor verir. sondaki parantezleri koyunca yeni bos bir obje verir


const dizi = []
console.log(dizi.constructor());         //// Native kodla yazilmis bir constructor verir. sondaki parantezleri koyunca yeni bos bir array verir


const fonk = function(){}                // Native kodla yazilmis bir constructor verir. sondaki parantezleri koyunca yeni bos bir anonymus fonksiyon verir
console.log(fonk.constructor());




/******************    PROTOTYPE KULLANIMI  ******************** */


//Constructor'da yer alan bilgileri de kisaltabiliriz.
//Mesela iki kisinin okul ve bilgileriGoster fonksiyonu birebir ayni olsa bunlari tekrar tekrar yazmanin manasi yok

const salih = new Ogrenci('salih', 21, true, 'ODTÜ')
const mert = new Ogrenci('mert', 20, false, 'ODTÜ')

Ogrenci.prototype.okul = "ODTÜ"
Ogrenci.prototype.bilgileriGoster = function(){
    return `ismim ${this.isim} yasim ${this.yas} ve okulum ${this.okul}`
}


function Ogrenci(ad, yas, evliMi, okul){
    this.isim = ad;
    this.yas = yas;
    this.evliMi = evliMi;
    
}

console.log(mert.bilgileriGoster());
console.log(salih.bilgileriGoster());

console.log(mert.constructor.prototype);
console.log(Object.getPrototypeOf(salih));


const dizi1 = [1,2,3]
const dizi2 = [2,23,34]

console.log(dizi1.constructor.prototype);

//Prototypler, arrayler fonksiyonlar ve objelerin ortak olarak kullanabildigi metodlarin var olmasini saglar.(inheritance) Yani push,pop  vs gibi metodlari hepsinde kullanabilirsin. Cünkü prototyp olarak tanimlanmis .


/********************  WRAPPER FONKSIYONLAR ********************/

console.clear();

// String bir ifadeye nokta koyarak metod cagirip kullanabiliyoruz. Peki bu nasil oluyor?

const firstN = 'necati'
firstN.toUpperCase();
console.log(typeof firstN);                 //string verir
console.log(firstN instanceof Object);      //false 

console.log(firstN.charAt(0));              // n

// Peki o zaman bunu nasil yapiyor?
// Cunku aslinda bu primitive tipleri kendisi String ve Number olarak degistiriyor. Bu bas harfi büyük olan yeni degerler birer obje gibi davraniyor.

const renk = new String("kirmizi")
console.log(typeof renk);                  // Object döner


const no = 6;
console.log(typeof no);                   //number

const dogumYili = new Number(1987)
console.log(dogumYili instanceof Object);    // true


//Yani aslinda primitive olarak gönderilen string ve number gibi tipleri de kendisi bu primitive olmayan tipler icerisine aliyor. bunlara Wrapper (sarmalayici) fonksiyonlar deniyor


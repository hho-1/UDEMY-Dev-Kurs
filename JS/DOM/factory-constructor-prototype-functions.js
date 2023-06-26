
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

const yunus = new Ogrenci('yunus', 30, false, 'BOUN')
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
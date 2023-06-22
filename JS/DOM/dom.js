let deger;

deger = window;
deger = window.document;  //document bizim o anki html sayfamizin tamamini ifade ediyor.


deger = document.all;
//deger = document.all.length;

//console.log(document.all[5]);   //body'ye eskiden bu sekilde erisiliyordu

console.log(deger);

/* let dizi = Array.from(deger)  //degerin elemanlarini bir arraye ata

dizi.forEach(function(item){   //sayfadaki tüm elemanlari yazdiriyoruz
    console.log(item);
}) */

deger = document.head;
deger = document.body;             //documentin body kismi
deger = document.domain;           //domain numarasi
deger = document.URL;              //calistirildigi URL
deger = document.contentType;      // icerik tipi,  text/html verecek

deger = document.forms;            //Varsa tüm formlari bana getir
deger = document.forms[0].id;      //Array olmasalar da bunlari array gibi degerlendiriyor. Bu yüzden array gibi cagiriyoruz.

deger = document.links;            // Tüm linkleri ver
deger = document.links[1].className;         //Endeksi 1 olanin classini ver
deger = document.links[1].classList;         //Endeksi 1 olanin classlist'ini ver. DOMTokenList diye geciyor

deger = document.images[0].src;                            //Imajin kaynagini ver
deger = document.images[0].getAttribute('src');            //Imajin kaynagini ver. src attribute oldugu icin bu calisir

console.log(deger);

console.clear();
/******************************************************* */

console.log(document.getElementById('baslik'));
console.log(document.getElementById('baslik').id);
console.log(document.getElementById('baslik').className);

const baslik = document.getElementById('baslik');

//Stil degistirme

baslik.style.backgroundColor = "teal"
baslik.style.color = "tomato"
baslik.style.padding = '2rem'

//baslik.style.display = 'none'    Bunu komple yok et, gösterme demek


//icerik

baslik.textContent = "Bu yeni baslik"
const test = baslik.textContent;
console.log(test);

baslik.innerText = 'En yeni baslik'
// baslik.innerHTML = '<img src="https://picsum.photos/id/609/600/400" alt="">'



console.log(document.querySelector('h3')); 
console.log(document.querySelector('#liste')); 
console.log(document.querySelector('.liste-item'));    //Bu class adinda cok eleman olsa da bu tek eleman geri döndürür

console.log(document.querySelector('ul > li + li'));   // Calisiyor bu. ul altindaki ikinci li'yi bul demek


console.log(document.querySelector('.link.link-google'));


const myListe = document.querySelector('li')  //Bursa
myListe.style.color = 'blue'                  //sadece listenin ilk elemanini blue yapti


document.querySelector('li:last-child').style.color = 'red'      // Listenin son elemanini red yapti


document.querySelector('li:nth-child(2)').style.color = 'orange'      // Listenin ikinci elemanini turuncu yapti. 2'nin index numarasi olmadigina dikkat et!!!!!!!!


document.querySelector('li:nth-child(odd)').style.color = 'purple'    //Sadece ilk elemani mor yapar. Cünkü querySelector sadece tek bir eleman secer, unutmayalim


console.clear();


//***************************    MULTI-SELECTORS     *****************************

const links = document.getElementsByClassName('link')
console.log(links);
console.log(links[1]);         //   2. siradaki elemani ver, yani 1 indexli

links[1].style.color = 'red'
links[2].style.backgroundColor = '#ccc'
links[2].textContent = 'Instagram Linki'

console.log(document.getElementsByClassName('liste-item'));


console.log(document.getElementsByClassName('ul liste-item'));     //Yazdigimiz dogru olmasina ragmen bunu yapmiyor. Cünkü bu queryselector gibi kuvvetli bir secici degil, sadece class adina göre arayip bulur. Peki bunu nasil yapabiliriz???

console.log(document.querySelector('ul').getElementsByClassName('liste-item'));


const dizim = Array.from(links)
dizim.reverse();

dizim.forEach((item) => console.log(item))


const listem = document.getElementsByTagName('li')
console.log(listem);


//******************************* querySelector ************************/

//querySelector kullaninca bulunan elemanlari bir arraye atayim gibi bir derdimiz yok 

const linkler = document.querySelectorAll('a');
console.log(linkler);


const linkler2 = document.querySelectorAll('.link');
console.log(linkler2);


const sehirlerTek = document.querySelectorAll('li:nth-child(odd)')
console.log(sehirlerTek);

const sehirlerCift = document.querySelectorAll('li:nth-child(even)')
console.log(sehirlerCift);

//sehirlerTek.style.backgroundColor = 'yellow'     Bu calismaz. forEach kullan

sehirlerTek.forEach((item) => item.style.backgroundColor = 'yellow')
sehirlerCift.forEach((item) => item.style.backgroundColor = 'skyblue')

console.clear();
/********************* DOM --- Elemanlar arasinda gezinme ************************/


let value;

const myList = document.querySelector('ul.liste')
console.log(myList);


value = myList.childNodes;        // listede 4 elema olmasina ragmen 9 degerini dönüyor. Cünkü alt satira gecmeyi bile bir text elemani olarak aliyor. O yüzden childNode kullanmak cogu zaman mantikli degil


value = myList.childNodes[1].nodeName     // LI
value = myList.childNodes[1].nodeType     // 1 : element demek,  3: text    8: comment. bu sekilde tiplere atanan birer sayi varmis

value = myList.firstChild;
value = myList.firstElementChild;


value = myList.lastChild;
value = myList.lastElementChild;


value = myList.childElementCount        // kac child oldugunu veriyor

value = myList.parentNode               // body'yi verir, cünkü ul'nin tasiyicisi body
value = myList.parentElement
value = myList.parentElement.parentNode    //html
value = myList.parentElement.parentElement.parentNode      //  documenti verir


const myInput = document.querySelector('input')
console.log(myInput.parentElement);         //formu verecek
console.log(myInput.parentElement.parentElement);    //body


value = document.querySelector('li').nextElementSibling.nextElementSibling   //Ankara

value = document.querySelector('li:nth-child(4)').previousElementSibling     // Ankara



console.log(value);       

console.clear();

/* *******************    ELEMAN EKLEME VE SILME  *********************  */


const newListItem = document.createElement('li')
newListItem.className = 'list-item'
newListItem.textContent = 'Trabzon'            // icinde yazan sey
newListItem.id = 'newID'                       // id verdik
newListItem.setAttribute('deger', 'sehir')     //Yeni bir attribute tanimladik

document.querySelector('#liste').appendChild(newListItem)      // Bununla, burada olusturdugumuz yeni liste elemanini ilgili listeye atadik


document.querySelector("h3").textContent = 'necati'      //Sayfadaki h3'ü bul ve necati yap

const yeniBaslik = document.createElement('h4')
yeniBaslik.id = 'h3ID'


//Replace

yeniBaslik.textContent = 'Yeni Baslik'

const eskiBaslik = document.querySelector('h3')
const baslikParent = document.querySelector('body')
baslikParent.replaceChild(yeniBaslik, eskiBaslik)        //Burada eski basligimizi yeni bir baslikla degistirdik, yani replace yaptik


console.log(yeniBaslik);


//remove


//const listeElemani = document.querySelector('li')      //Bursa
//listeElemani.remove();                                 //Bursa silindi
//document.querySelector('ul').remove();                 //Tüm sehir listesi silindi


document.querySelector('ul').removeChild(document.querySelectorAll('li')[2]) //removeChild kullanarak Ankara'yi sildik


document.querySelector('form').removeChild(document.querySelector('input'))   //Form icindeki inputu sildik
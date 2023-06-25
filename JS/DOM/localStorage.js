
//localStorage.setItem("isim", "feyzullah")         //sadece stringler saklanabilir
//localStorage.setItem("yas", "32")                 // Browser kapatildiginda sessionstorage'daki veriler kaybolur, ama localStorage'daki veriler kalir

sessionStorage.setItem("ad", "necati")

console.log(localStorage.getItem("isim"));
console.log(localStorage.getItem("yas"));

localStorage.removeItem("yas");

localStorage.clear()



//Bunlar tek deger sakliyor. Peki coklu deger saklamak istersek ne yapacagiz?
//JSON kullanmak zorundayiz. localStorage'da array tutamiyoruz

document.querySelector("#form").addEventListener('submit', (e) => {
    
    const yeniIsim = document.querySelector(".isim").value
    let isimDizisi;

    if(localStorage.getItem('isimListesi') === null){
        isimDizisi = []
    }
    else{
        isimDizisi = JSON.parse(localStorage.getItem("isimListesi"))         //Local storage'a bak. Eger orada isimListesi yoksa bos bir isimDizisi arrayi olustur. Varsa da bu isimlistesi degerlerini JSON'a göre parse edip isimDizisine ata 
    }
    
    isimDizisi.push(yeniIsim)         //Formdan gelen degeri bu diziye aktar

    localStorage.setItem('isimListesi', JSON.stringify(isimDizisi))          //JSON'a göre parse edilmis isimDizisini tekrar stringe dönüstürüp localstorage'a gönder
    
    const yeniLi = document.createElement('li')
    yeniLi.textContent = yeniIsim                  //Bu 3 satiri asagidan buraya aldik
    ulListesi.appendChild(yeniLi)
    
    e.preventDefault()                            //Yukardaki kod sayesinde forma her yazdigim isim array elemani gibi localstorage'a sirayla gönderilip orada tutuluyor


})

//Localstorage'a aldigim verileri ekrana nasil getirecegim?

const ulListesi = document.querySelector('.liste')                    // ul
const isimDizisi = JSON.parse(localStorage.getItem('isimListesi'))    // isimDizisini tekrar isimListesinden JSON'a parse et

if(isimDizisi != null){
    isimDizisi.array.forEach(isim => {              // isimDizisinin her bireyi icin
    
        const yeniLi = document.createElement('li')         //yeni li olustur
        yeniLi.textContent = isim                           //icine ismi yaz
        ulListesi.appendChild(yeniLi)                       // Bu li'yi ul'ye append et
    });
}




//Bu durumda eger forma herhangi bir eleman girilmezse hata verecek. Cünkü forEach'in icindeki fonksiyon bir sey bulamiyor
//Bunu önlemek icin de en üstte bir if girip kontrol ettirecegiz

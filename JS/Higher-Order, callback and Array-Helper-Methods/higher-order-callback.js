
// Fonksiyonlar da birer objedir. Bunlari baska bir fonksiyona parametre olarak gönderebilirsin, deger atayabilirsin

let myDizi = [1,2,3]

/* const diziKopyalaIkiIleCarp = function(dizi){

    let geciciDizi = []
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] * 2;
        
    }
    console.log(geciciDizi);
} */

//diziKopyalaIkiIleCarp(myDizi);
console.log(myDizi);              // Üstteki fonksiyon asil dizimizi degistirmedi


/* const diziKopyalaIkiIleBol = function(dizi){

    let geciciDizi = []
    for (let i = 0; i < dizi.length; i++) {
        geciciDizi[i] = dizi[i] / 2;
        
    }
    console.log(geciciDizi);
}

diziKopyalaIkiIleBol(myDizi) */

// Bu sekilde bir sürü fonksiyon yazmak yerine kisayol olarak söyle bir sey yapacagiz


const ikiIleCarp = function(sayi){
    return sayi * 2;
}
const ikiIleBol = function(sayi){             //bunlara first class functions deniyor. Yani bebek fonksiyonlar
    return sayi / 2;
}
const ikiIleTopla = function(sayi){
    return sayi + 2;
}

const diziislemleri = function (dizi, islem) {
    let geciciDizi = []
    for (let i = 0; i < dizi.length; i++) {
        const element = dizi[i];
        geciciDizi[i] = islem(dizi[i])
    }
    console.log(geciciDizi);
}

diziislemleri(myDizi, ikiIleCarp)         // Fonksiyona fonksiyon gönderdik.Parantezsiz olduguna dikkat et. Bunlara da higher order fonksiyon diyoruz. Yani parametre olarak da function alan fonksiyonlar. Buradaki parametrede yer alan fonksiyonlara da callabck functions deniyor. Yani direkt olarak cagrilmayan ama asil fonksiyon üzerinden cagrilan fonksiyonlar

diziislemleri(myDizi, ikiIleBol)
diziislemleri(myDizi, ikiIleTopla)


function adimiSoyle(ad,soyad){
    console.log(`Merhaba ${ad} ${soyad}`);
}
adimiSoyle('salih','tuna')

function adimiBagir(ad,soyad, callback){
    const mesaj = `Merhaba ${ad.toUpperCase()} ${soyad.toUpperCase()}`;
    callback(mesaj)
}
adimiBagir('salih','tuna', function (msj){            //adimiBagir higher order, digeri ise callback function
    console.log(msj);
})
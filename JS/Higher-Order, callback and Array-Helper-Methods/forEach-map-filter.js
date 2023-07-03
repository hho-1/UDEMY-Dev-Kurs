

const sayilar = [1,2,3,4,5,6]

sayilar.forEach((x, index) => {           //arrow function ile
    console.log(x*2,index);
})


function ictekiFonksiyon(sayi, index){       //icteki fonksiyonu ayiriyoruz
    console.log(sayi*2,index);
}

sayilar.forEach(ictekiFonksiyon)         //Burasi da ayni sonucu verecek


//kendi forEach'imizi yazalim

let sayilar2 = [43,32,21,65,54]

function diziyiYazdir(dizi, callback){
    for (let i = 0; i < dizi.length; i++) {
        callback(dizi[i], i)
    }
}

diziyiYazdir(sayilar2, function(deger, index){
    console.log("Deger: " + deger + "  Index: " + index);
})




/* -------------------------------------------------------------------------- */
/*                                     MAP                                    */
/* -------------------------------------------------------------------------- */

sayilar.push(7);       // burada sayilar arrayini degistirmeme ragmen hata almiyorum. Cünkü const bellekteki yerini sabitlemek demek. Eger sayilar = [1,2,3] yapsam o zaman problem yapardi.


const yeniSayilar = sayilar.map(function(sayi){
    return sayi * 2;
})

console.log(yeniSayilar);

const kitaplar = [
    {adi: 'chg', sayfSayisi: 374},
    {adi: 'fgb', sayfSayisi: 574},
    {adi: 'fng', sayfSayisi: 394},
    {adi: 'fss', sayfSayisi: 234}
]

const sayfaSayilari = kitaplar.map((kitap) => {
    return kitap.sayfSayisi;
})

console.log(sayfaSayilari);

const kitapliste = kitaplar.map((kitap) => kitap.adi + " " + kitap.sayfSayisi)
console.log(kitapliste);


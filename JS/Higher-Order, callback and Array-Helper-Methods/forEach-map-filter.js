

let sayilar = [1,2,3,4,5,6]

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
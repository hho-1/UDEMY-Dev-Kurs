const numbers = [1,2,3,4,5,6,7,8,9]

const sum = numbers.reduce((num, sum, index) => {
    return sum + num;
}, 0)

console.log(sum);

//normalde map'le yapilmasi daha kolay olan bir islemi reduce ile yapalim

const yeniDiziWithReduce = numbers.reduce((dozininOncekiHali, oAnkiSayi) => {
    dozininOncekiHali.push(oAnkiSayi * 5);
    return dozininOncekiHali;
}, [])

console.log(yeniDiziWithReduce);


//normalde filter'le yapilmasi daha kolay olan bir islemi reduce ile yapalim

const reduceInsteadOfFilter = numbers.reduce((pre, sayi, index) => {
    if(sayi > 4){
        pre.push(sayi)
    }
    return pre;
}, [])

console.log(reduceInsteadOfFilter);


//normalde find'le yapilmasi daha kolay olan bir islemi reduce ile yapalim

const reduceInsteadOfFind = numbers.reduce((pre, sayi, index) => {
    if(sayi === 4){
        return sayi;
    }
    else{
        return pre;
    }
    
}, undefined)

console.log(reduceInsteadOfFind);



//?   SORU: Parantezler dengeli mi? Bir yerdeki parantez sayisi dengeli mi? Her acilan kapatilmis mi?

function parantezlerDengeliMi(metin){
    const dizi = metin.split('')

    const sonuc = dizi.reduce(function(previous, karakter){
        if(karakter ==="("){
            previous++;
        }
        if(karakter ===")"){
            previous--;
        }
        return previous;
    }, 0)

    if(!sonuc){
        console.log(metin + " dengeli bir yapidadir");
    }
    else{
        console.log(metin + " dengeli bir yapida degildir");
    }
}

parantezlerDengeliMi(")()()()()");
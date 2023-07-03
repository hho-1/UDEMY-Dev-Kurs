const bitkiler = [
    {ad:'üzüm', tür: 'meyve'},
    {ad:'ispanak', tür: 'sebze'},
    {ad:'cilek', tür: 'meyve'},
    {ad:'pancar', tür: 'sebze'},
    {ad:'patlican', tür: 'sebze'},
    {ad:'karpuz', tür: 'meyve'}
]

const meyveler = bitkiler.filter((item) => item.tür === 'meyve')
console.log(meyveler);

const sebzeler = bitkiler.filter((item) => item.tür === 'sebze')
console.log(sebzeler);

/* -------------------------------------------------------------------------- */
/*                                    FIND                                    */
/* -------------------------------------------------------------------------- */

const findSonuc = bitkiler.find(function (eleman){         //find Sadece 1 tane eleman döndürür. Buldugu ilk elemani
    return eleman.tür === 'meyve'
})
console.log(findSonuc);


/* -------------------------------------------------------------------------- */
/*                                    EVERY                                   */
/* -------------------------------------------------------------------------- */

const sayilar = [1,2,3,4,5,6,7]

const sayiEvery = sayilar.every((sayi) => {
    return sayi < 6;                              // hepsi 6'dan kücük mü?
})
console.log(sayiEvery);


const sayiSome = sayilar.some((sayi) => {
    return sayi < 6;                              // Bazilari 6'dan kücük mü?
})
console.log(sayiSome);
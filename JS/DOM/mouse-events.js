/* document.querySelector('.link').addEventListener('click', function(e) {
    
    let deger;
    deger = e.target;           //tiklanma olayinin gerceklestigi yer

    deger = e.target.className;   // üsttekinin classi

    deger = e.type;               // eventin tipi, burada click veriyor. baska eventler de var
    
    
    console.log(deger);
    e.preventDefault();       // Sayfanin acilmasini engelle
}
) */

function tiklanma(e){
    let deger;
    deger = e.type;

    console.log(deger);
    e.preventDefault();
}

//Simdi bu fonksiyonu yukarida yerine koyabiliriz

document.querySelector('.link').addEventListener('click', tiklanma)         // tiklanma yanina ac parantez yapmiyoruz, o zaman bu fonksiyonu direkt gidip calistirir, biz bunu istemiyoruz. Bu sekildeki gibi yazarsak sadece click yapildiginda calistiracagini anliyor.

document.querySelector('.link').addEventListener('dblclick', tiklanma)         // cift tiklama

document.querySelector('.link').addEventListener('mousedown', tiklanma)   //fareyi basili tutma ---- el birakildiginda da click tetiklenir


document.querySelector('.link').addEventListener('mouseup', tiklanma)

document.querySelector('.link').addEventListener('mouseenter', tiklanma)    //mouse üzerine gelince aktive olur

document.querySelector('.link').addEventListener('mouseleave', tiklanma)    //mouse üzerinden gidince aktive olur


//document.querySelector('.container').addEventListener('mouseover', arkaPlanRengiDegistir)    //mouse üzerine gelince aktive olur ama icerdeki elemanlarin üzerinden gecince tekrar aktive olur

document.querySelector('.container').addEventListener('mouseout', tiklanma)    //mouse üzerinden gidince aktive olur, her elemanin üzerinden ayrilinca aktiflesir


/* document.querySelector('.container').addEventListener('mousemove', koordinatiniVer)    // Mouse'un her hareketinde aktiflesir


function koordinatiniVer(e){
    document.querySelector('.yazi').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    
} */    // yazi yerine mouse'un o anki koordinatini verir



document.querySelector('.container').addEventListener('mousemove', arkaPlanRengiDegistir)

function arkaPlanRengiDegistir(e){
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`

    document.querySelector('.yazi').textContent = `R: ${e.clientX % 255} G: ${e.clientY % 255} B: ${(e.clientX + e.clientY) % 255}`;

}






const myForm = document.querySelector("#form")
const ad = document.getElementById("ad")
//ad.addEventListener('keydown', eventiYakala)
//ad.addEventListener('keyup', eventiYakala)
//ad.addEventListener('keypress', eventiYakala)            //basinca
//ad.addEventListener('focus', eventiYakala)                 //yazim alanina tiklayinca
//ad.addEventListener('blur', eventiYakala)                  //yazim alanindan cikinca
//ad.addEventListener('cut', eventiYakala)                   //yazim alanindan bir sey kesince
//ad.addEventListener('paste', eventiYakala)                  //yazim alanina bir sey yapistirinca
ad.addEventListener('input', eventiYakala)                  //yazim alanindaki her faaliyette


//myForm.addEventListener('submit', eventiYakala)


function eventiYakala(e){
    //console.log(ad.value);
    //document.querySelector('.link').textContent = ad.value

    console.log(e.target.value);
    console.log("Èvent adi " + e.type);
    e.preventDefault()
} 
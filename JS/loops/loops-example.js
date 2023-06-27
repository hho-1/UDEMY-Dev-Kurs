//     1- Piyango

/* let randomNum = Math.floor((Math.random() * 90) + 10);
console.log(randomNum);

let birler = randomNum % 10;
let onlar = Math.floor(randomNum / 10);

let tersRandom = birler * 10 + onlar;

let tahmin = parseInt(prompt("Iki basamakli bir sayi tahmin ediniz: "));

let x = tahmin % 10;
let y = Math.floor(tahmin / 10);

if(onlar === y){
    if(birler === x) console.log("10 bin TL kazandiniz");
    else console.log("1 bin TL kazandiniz");
}
else if (onlar === x) {
    if(birler === y) console.log("5 bin TL kazandiniz");
    else console.log("Bin TL kazandiniz");
}
else if (birler === x) {
    console.log("Bin TL kazandiniz");
}

else{
    console.log("Ödül kazanamadiniz");
} */



// 2- Girilen 3 sayinin ortalamasini alan program

let sum = 0;
let arr = [23, 45, 89]
console.log((arr[0] + arr[1] + arr[2])/3);

//klavyeden kenarlari girilen bir ücgnin cesidi
let arrTriangle = [4,4,4]
if(arrTriangle[0] === arrTriangle[1] && arrTriangle[1] === arrTriangle[2]){
    console.log("Eskenar ücgen");
}
else if(arrTriangle[0] === arrTriangle[1] || arrTriangle[1] === arrTriangle[2]){
    console.log("Ikizkenar ücgen");
}
else{
    console.log("Cesitkenar ücgen");
}

//Dersin gecilip gecilmedigine dair sonuc

let midterm = 45;
let final = 53;
let not = (midterm * 40 + final * 60)/100

 not >= 50 ? console.log(`Dersi gectiniz. Ortalamaniz ${not}`) : console.log(`Kaldiniz. Notunuz ${not}`);

 // 1'den 100'e kadar sayilari toplayan kod

let max = 100;
let min = 1;
let total = 0;
for(let i = min; i <= max; i++){
    total += i;
}
console.log(total);

//[2,5,1,10,6,2,8,9,3,4,7] sayilari siralayip aralarinda virgül olacak sekilde yazan program

let array = [2,5,1,10,6,2,8,9,3,4,7];
let sorted = array.sort((a,b) => a-b)     //Kücükten büyüge siraladik
console.log(sorted);

//Faktoriyel

let fakt = 1
let sayi = 7;
let carpim = 1;
for(let i = 1; i<=7;i++){
    carpim *= i
}
console.log(carpim);


// Fonksiyon

/* const x = +prompt("x: ")
const y = +prompt("y: ")

let result = 0;

if(x>0 && y<0) result = 4*x + 2*y +4;
else if(x>0 && y==0) result = 2*x - 2*y +3;
else if (x<0 && y>0) result = 3*x + 4*y + 3;
else result = 0;

console.log(result); */


//Carpim tablosu

for(let i = 1; i <=10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

console.clear();


//Kullanicidan sürekli sayi alan ve kullanici sifira bastiginda bu sayilarin carpimini ekrana yazan program

/* let carpim1 = 1;
let number;
do{
    number = +prompt("Sayi gir: ")
    carpim1 *= number
    console.log(carpim1);
}while(number !== 0) */



//Sicak - soguk oyunu

const realNumber = Math.floor(Math.random() * 100);
console.log(realNumber);
let tahmin;
let count = 0;

do{
    let tahmin = +prompt("Tahmininizi giriniz: ")
    
    if(tahmin < realNumber){
        console.log("Tahmininizi artirin"); 
        count++;
    } 
    else if(tahmin > realNumber){
        console.log("Tahmininizi azaltin"); 
        count++;
    } 
    else if(tahmin === realNumber){
        count++;
        console.log("Dogru bildiniz. Tebrikler...", count,"inci denemede buldunuz."); 
        break;
    } 
    else{
        console.log("Tahmininiz 1 ile 100 arasinda olmalidir");
        count++;
    }
}while(tahmin !== realNumber)
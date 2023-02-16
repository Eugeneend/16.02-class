'use strict'

// const str = 'Якийсь рядок з кількох слів можливо з повторюванням';

// const strtext = function(s) {
//     let a = s.toUpperCase()
//     return a
// }

// const strToArr = function(s) {
    
// let arr = s.split(' ');

//    return arr

// }

// let newStr = strtext(str);

// let arrLess = strToArr(newStr);


// const fitstleattertoUppercase = function(les) {
//     return les[0].toUpperCase() + les.substring(1);

// }

// const strToArrfirstletter = function(arr) {
   
//     let newArr = [];
   
//     for(let i = 0; i < arr.length; i++) {
     
//         newArr[i] = fitstleattertoUppercase(arr[i]);

//    }

//    return newArr;
   
// }

// const newstrToArr = strToArr(str);

// // console.log(arrLess);



// let rez = strToArr(str);

// console.log(rez);

// let N = strToArrfirstletter(rez);

// console.log(N);




// const square = {
//     a : {
//         x:5,
//         y:7
//     },
//     b: {
//         x:-2,
//         y:-3
//     }
// }

// const widthSquare = function(obj) {
//     return obj = Math.abs(square.a.x) + Math.abs(square.b.x)
// }

// console.log(widthSquare(square));



// ???????????????????????????????????????????????????

let a = new Date();

let d = a.getDate();

let c = a.getMonth() ;

let b = a.getFullYear();


document.write(`<h1>${d}.0${c}.${b} </h1>`);

const leadingZero = function(s){
    return s < 10 ? '0' + s : s;
}

const monthtoString = function(n) {
   
    let monthArr = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень','вересень', 'жовтень', 'листопад', 'грудень']
return monthArr[n]
}

document.write(`<h1>`)

let hour = a.getHours();

let minute = a.getMinutes();

let second = a.getSeconds();

document.write(`${hour} ${minute} ${second}`);

const test = function() {
    alert('Hello');
}

// setTimeout(function() {
//     alert('Hello');
// }, 5000)

let o = setInterval(test, 5000);

console.log(o);

clearInterval()

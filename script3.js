// var body = document.querySelector("body");
// // console.log(body)
// // body.addEventListener("load",typing)
// // body.addEventListener("load",typing)
// var text1 = "ELECTROMECHANICAL ENGINEER";
// var text2 = "WEB DEVELOPER";
// var text3 = "FULL STACK JS INSTRUCTOR";
// var tab = [text1,text2,text3]
// var isAdd = true;

// var i = 0;
// var textElt = document.getElementById("text");
// var next =false
// function type(t) {
//   if (i < t.length && isAdd ===true && next===false) {
//     textElt.innerHTML += t.charAt(i);
//     i++;
//     isAdd = true
    
//   }
//   else {
//     var a=textElt.innerHTML.substr(0,i)
//     i--
//     textElt.innerHTML = a
//     isAdd=false
//     if (a.length === 0) {
//         isAdd = true
//         next=true
//     }
//   }
//   setTimeout(() => {
//       type(t)
//   }, 200);

// }

//     type(tab[0])
//     setTimeout(() => {
//         type(tab[1])
//     },20000);
// import Typed from 'typed.js';
// var Typed = require('typed.js')
var typed = new Typed('#text', {
    strings: ["FULL STACK JS INSTRUCTOR.", "WEB DEVELOPER.","ELECTROMECHANICAL ENGINEER"],
    typeSpeed: 100,
    backSpeed:100,
    cursorChar: '#',
    loop:true
  });

  

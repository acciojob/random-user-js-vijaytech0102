var nam=document.getElementById('first');
var emailbtn=document.getElementById('btn1');
var phonebtn=document.getElementById('btn2');
var agebtn=document.getElementById('btn3');


var p=fetch("https://randomuser.me/api/");

p.then((value1)=>{
     return value1.json();
}).then((value2)=>{
   console.log(value2);

var name=`${value2.results[0].name.first} ${value2.results[0].name.last}`;

nam.innerHTML=name;
var img1=value2.results[0].picture.large;


var html=`<img src=${img1}  />`
// console.log(value2.results[0].picture.large)
var email=value2.results[0].email;
var phone=value2.results[0].phone;
var age=value2.results[0].dob.age;
console.log(age)


const  myEmailFunction=()=> {
   document.getElementById("btnval").innerHTML = email;
 }
 const  myPhoneFunction=()=> {
   document.getElementById("btnval").innerHTML = phone;
 }
 const  myAgeFunction=()=> {
   document.getElementById("btnval").innerHTML = age;
 }
 

emailbtn.addEventListener("click", myEmailFunction);
phonebtn.addEventListener("click", myPhoneFunction);
agebtn.addEventListener("click", myAgeFunction);

document.getElementById('img').innerHTML=html;
})

const newUser=()=>{

   document.getElementById("btnval").innerHTML =" ";
   var p=fetch("https://randomuser.me/api/");

p.then((value1)=>{
     return value1.json();
}).then((value2)=>{
   console.log(value2);

var name=`${value2.results[0].name.first} ${value2.results[0].name.last}`;

nam.innerHTML=name;
var img1=value2.results[0].picture.large;


var html=`<img src=${img1}  />`
// console.log(value2.results[0].picture.large)
var email=value2.results[0].email;
var phone=value2.results[0].phone;
var age=value2.results[0].dob.age;
console.log(age)


const  myEmailFunction=()=> {
   document.getElementById("btnval").innerHTML = email;
 }
 const  myPhoneFunction=()=> {
   document.getElementById("btnval").innerHTML = phone;
 }
 const  myAgeFunction=()=> {
   document.getElementById("btnval").innerHTML = age;
 }
 

emailbtn.addEventListener("click", myEmailFunction);
phonebtn.addEventListener("click", myPhoneFunction);
agebtn.addEventListener("click", myAgeFunction);


// console.log(value2.results[0].dob.age)
// console.log(value2.results[0].email)
// console.log(value2.results[0].phone)


document.getElementById('img').innerHTML=html;
})

}
var last=document.getElementById("final");
last.addEventListener('click',newUser)
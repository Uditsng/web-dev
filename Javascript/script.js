/* console.log("hey")
console.error("404 erro")
console.warn("Danger ahead")

let s = 'udit'
s = "kya hai"
console.log(s)

const d = 'udit'
d = "kya hai"
console.log(d)  */

// alert("LEVEL 1")

// let ans1 = confirm(" Are you ready Champ?")
// console.log(ans1)

// let ans2 = prompt("Enter your name :")
// console.log('user name : ', ans2)


// let arr = [
//     {name:"udit",age:13},
//     {name:"lucky",age:33}
// ]
// console.log(arr)

let h1 = document.querySelector("h1")
// h1.innerHTML = " Champion"
// h1.style.backgroundColor = " royalblue"
// h1.style.color = 'brown'
h1.addEventListener('dblclick',function(){
    h1.innerHTML = "Welcome"
})

h1.addEventListener('click',function(){
    h1.style.color = 'purple'
})
// type conversion = change the datatypes of a value to another (strings, numbers, booleans)

//let age = window.prompt('How old are you?');
//age = Number(age);

//age+=1;

//console.log(age, typeof age);

let x= "pizza";
let y= "pizza";
let z= "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x,typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// constants = a variable that cant be changed

const pi = 3.14159;
let radius;
let circumference;


document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('mytext').value;
    radius = Number(radius);
    circumference = 2*pi*radius;
    document.getElementById('myh3').textContent = circumference + " cm";
}

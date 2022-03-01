for (i = 0; i <10; i+=2){
    console.log(i);
    i++;

}

let a=3;
let b=new number(3);
let c=3;
console.log(a==b);//true
console.log(a===b);//false
console.log(b===c);//false

function sum(num1,num2){
    return num1+num2;

}
console.log(sum(2,"3"))

let num=0;
console.log(num++);
console.log(++num);
console.log(num--);
console.log(--num);
console.log(num);

function getAge(...args){
    console.log(typeof args)
}
getAge(45)

var num=70;
let num=100;
console.log(num);//it will be as error

const obj={a:"one",b:"two",a:"three"};
console.log(obj);

for (let i=1; i<10; i++){
    if(i==3)
    continue;
    console.log(i)
}



Problem 1 : Check whether a number is Prime or not.



let num = 17;


let count=0;

for (let i=1; i<=num; i++){

if(num % i ==0)

count++
}

if(count==2){
 console.log("It is a prime")
}
else{
console.log("It is not a prime")
}
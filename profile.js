



const num = 22
let isPrime = true;


if(num === 1){
    console.log("1 is neither prime nor composite number.");

}


else if(num > 1){
    for(let i = 2 ;i<num;i++){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }

    
if(isPrime){
    console.log("Is a prime");
}
else{
    console.log("Is not a prime")
}

}


else{
    console.log("The number is not a prime number.");
}

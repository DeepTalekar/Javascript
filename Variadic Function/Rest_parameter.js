function sum (...numbers){
    let total = 0;
  for (let digit of numbers){
    total += digit; 
  }
return total;
}

sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);

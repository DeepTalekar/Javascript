function average (...numbers){
  let total = 0;
    let index = 0;
    for (let digits of numbers){
    total += digits;
        index++;
  }
return (total/index);
}

average(100, 1, 45)
average(10000, 3000, -568)

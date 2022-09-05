function multiply(...number) {
  let result = 1
  for (i = 0; i < number.length; i++){
    if (typeof number[i] === 'string') {
      continue;
    } else if (!Number.isInteger(number[i])) {
      number[i] = Math.floor(number[i]);
    } 
    result *= number[i]; 
  } 
  console.log(result);
}





multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
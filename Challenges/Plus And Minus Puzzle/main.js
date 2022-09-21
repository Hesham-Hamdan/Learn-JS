let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a]
  - Value: 11
  - Explain: pre increment

  [+]
  - Explain: Addition Operator

  [+]
  Explain: Unary Plus

  [b++]
  - Value: 20
  - Explain: post increment

  [+]
  - Explain: Addition Operator

  [+]
  Explain: Unary Plus

  [c++]
  - Value: 80
  - Explain: post increment

  [-]
  Explain: Subtraction Operator

  [+]
  Explain: Unary Plus

  [a++]
  - Value: 11
  - Explain: post increment
*/



/* The other two the same as the first*/
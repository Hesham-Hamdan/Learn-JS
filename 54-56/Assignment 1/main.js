let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let b = friends.length - friends.length;
while (index < friends.length) {
    if (friends[index][b] === ("A") || typeof friends[index] === 'number' ) { 
      index++
      continue;
    } else {
      counter++
      console.log(`${counter} => ${friends[index]}`);
      index++
    }
  }

// Output
"1 => Sayed"
"2 => Mahmoud"
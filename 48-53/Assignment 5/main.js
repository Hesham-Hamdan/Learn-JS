let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let b = letter.length;
let k = b - b;

for (i = b - b; i < friends.length; i++) {
  if(friends[i].startsWith(letter.toUpperCase())) continue;
  console.log(`${k + b} => ${friends[i]}`);
  k += b
}


// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
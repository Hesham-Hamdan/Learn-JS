let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

function show (num) {
  function details({title: t, age :a, available: av, skills: [c, d]} = myFriends[num - 1])  {
    console.log (t)
    console.log(a)
    console.log(av ? 'Available' : 'Not Available')
    console.log(d)
  }
  details()
} 

console.log (show(chosen));

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
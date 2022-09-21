let job = "Manager";
let salary = 0;



if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

console.log(salary);



// Solution 


switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}

console.log(salary);
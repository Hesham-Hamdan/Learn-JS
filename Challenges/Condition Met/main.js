let st = "Elzero Web School"; 

if (st[st.toLowerCase().indexOf('w')].toLowerCase() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}


if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}


 
let marks = prompt("Enter your marks");

switch (true) {
  case marks >= 80:
    console.log("A");
    break;
  case marks >= 70 && marks < 80:
    console.log("B");
    break;
  case marks >= 60 && marks < 70:
    console.log("C");
    break;
  case marks >= 50 && marks < 60:
    console.log("D");
    break;
  case marks >= 40 && marks < 50:
    console.log("E");
    break;
  case marks < 40:
    console.log("F");
    break;
  default:
    console.log("Missing marks or invalid input");
}
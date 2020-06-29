let food = [
  "0-Taco ",
  "1-Shawarma ",
  "2-Machboos ",
  "3-Kebab ",
  "4-Chicken fillet ",
  "5-mushroom soup ",
  "6-Ice-cream ",
];
alert(food);
let choose = prompt("choose the number of the dish you want from the menu");
switch (choose) {
  case "0":
    alert(" you ordered Taco");
    break;
  case "1":
    alert(" you ordered Shawarma");
    break;
  case "2":
    alert(" you ordered Machboos");
    break;
  case "3":
    alert(" you ordered Kebab");
    break;
  case "4":
    alert(" you ordered Chicken fillet");
    break;
  case "5":
    alert(" you ordered mushroom soup");
    break;
  case "6":
    alert(" you ordered Ice-cream");
    break;
  default:
    alert("wrong number, try choosing again.");
}

let operations = [
  "+ for addition",
  "- for subtraction",
  "* for multiplication",
  "/ for Division",
];
alert("choose 2 numbers then choose the operation");
alert(operations);

let first_number = prompt("choose the first number");
let second_number = prompt("choose the second number");
let calculate = prompt("choose the operation");
switch ((first_number, second_number, calculate)) {
  case "+":
    alert(parseInt(first_number) + parseInt(second_number));
    break;
  case "-":
    alert(parseInt(first_number) - parseInt(second_number));
    break;
  case "*":
    alert(parseInt(first_number) * parseInt(second_number));
    break;
  case "/":
    alert(parseInt(first_number) / parseInt(second_number));
    break;
  default:
    alert("wrong entries");
}

let age = prompt("Enter your age");
switch (age) {
  case "4":
    alert("kindergarten");
    break;
  case "5":
    alert("kindergarten");
    break;
  case "6":
    alert("kindergarten");
    break;
  case "7":
    alert("elemantry");
    break;
  case "8":
    alert("elemantry");
    break;
  case "9":
    alert("elemantry");
    break;
  case "10":
    alert("elemantry");
    break;
  case "11":
    alert("elemantry");
    break;
  case "12":
    alert("mid-school");
    break;
  case "13":
    alert("mid-school");
    break;
  case "14":
    alert("mid-school");
    break;
  case "15":
    alert("mid-school");
    break;
  case "16":
    alert("Highschool");
    break;
  case "17":
    alert("Highschool");
    break;
  case "18":
    alert("Highschool");
    break;
  case "19":
    alert("University");
    break;
  case "20":
    alert("University");
    break;
  case "21":
    alert("University");
    break;
  case "22":
    alert("University");
    break;
  default:
    alert("wrong entry");
    break;
}

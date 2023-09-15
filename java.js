// Chapter # 13-15 array
// Q#1

var firstName = [];
console.log(firstName);
// Q#2
// var firstNameName = new firstName();

// Q#3
var firstName = ["safdar", "adil", "mehnaz", "sheraz"];
console.log(firstName);
document.write(firstName);

// Q#4
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
document.write(num);
// Q#5
var bool = [true, false];
console.log(bool);
document.write(bool);

// Q#6
var mix = ["safdar", 1, 2, 3, true, undefined];
console.log(mix);
document.write(mix);

// Q#7

var education = [
  "SSC" + "<br>",
  "HSC" + "<br>",
  "BCS" + "<br>",
  "BS" + "<br>",
  "BCOM" + "<br>",
  "MS" + "<br>",
  "M.PHIL" + "<br>",
  "PHD" + "<br>",
];
document.write("<br>Qualification" + education);
console.log(education);

// Q#8
var student = ["ali", "sajid", "sidra"];
// var score = [320,230,480]
var score = [320];
var score1 = [230];
var score2 = [480];

var totalMarks = 500;
console.log(score);
document.write(score);

var per = (score / totalMarks) * 100;
var per1 = (score1 / totalMarks) * 100;
var per2 = (score2 / totalMarks) * 100;

console.log("Score of ali is" + score, "percentage " + per);
console.log("Score of sajid is" + score1, "percentage " + per1);
console.log("Score of sidra is" + score2, "percentage " + per2);

document.write("Score of ali is" + score, "percentage " + per);
document.write("Score of sajid is" + score1, "percentage " + per1);
document.write("Score of sidra is" + score2, "percentage " + per2);

// Q#9
var colorName = ["green", "blue", "red", "grey", "purple"];
console.log(colorName);
document.write(colorName);

// Q#9a
var colorName1 = prompt("Enter a color name");
colorName.unshift(colorName1);
console.log(colorName);
document.write(colorName);

//Q#9b
var colorName1 = prompt("Enter a color name");
colorName.push(colorName1);
console.log(colorName);
document.write(colorName);

// Q#9C
colorName.splice(0, 1, "blur", "orange");
console.log(colorName);
document.write(colorName);

// Q#9d
colorName.shift();
console.log(colorName);
document.write(colorName);

// Q#9e
colorName.pop(colorName);
console.log(colorName);
document.write(colorName);

// Q#9f
var userColor = prompt("Enter the colour");
var ind = +prompt("Enter the index");
colorName.splice(ind, 0, userColor);
console.log(colorName);

// Q#9g
var indexToDelete = +prompt(
  "Enter the index from which you want to delete color(s):"
);
var numColorsToDelete = +prompt(
  "Enter the number of colors you want to delete:"
);
colorName.splice(indexToDelete, numColorsToDelete);
document.write(
  "<h3>Array after deleting color(s) from a specific index: " +
    colorName +
    "</h3><br>"
);

// Q#10
var studentscore = [320, 280, 480, 120];
console.log(studentscore);
var score = studentscore.sort();
console.log(score);

// Q#11
var cityName = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
console.log(cityName);
var selectedCity = cityName.slice(2, 4);
console.log(selectedCity);
document.write(`Cities list : <br> ${cityName} <br> <br> <br>
                 Selected Cities Name <br> ${selectedCity}`);

// Q#12
var arr = ["this", "is", "my", "cat"];
var arr1 = arr.join(" ");
console.log(arr1);
document.write(arr1);

// Q#13
var devices = ["keyboard", "mouse", "printer", "monitor"];
for (var i = 0; i < devices.length; i++) {
  document.write(`Out: <br>
    ${devices[i]} <br>`);
}

// Q#14
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write(
  `out : <br>  ${devices[3]} <br>   out : <br>   ${devices[2]} <br>   out : <br>   ${devices[1]} <br>   out : <br>   ${devices[0]} <br>`
);

// Q#15
var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < mobiles.length; i++) {
  document.write("<option>" + mobiles[i] + "</option>");
}
document.write("</select>");

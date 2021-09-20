//Triangle
let triangle = document.querySelector("#triangle");
    triangle.addEventListener("click", function (event) {

let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "<br />";
}
    document.getElementById("output").innerHTML = string;
});
// console.log(string);


//Pyramid
let pyramid = document.querySelector("#pyramid");
    pyramid.addEventListener("click", function (event) {

let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
    string += "&nbsp";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
    }
    string += "<br />";
}
    document.getElementById("output").innerHTML = string;
});




//Reverse Pyramid
let reversePyramid = document.querySelector("#reverse-pyramid");
    reversePyramid.addEventListener("click", function (event) {

let n = 6;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    string += "&nbsp";
  }
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "<br />";
}
    document.getElementById("output").innerHTML = string;
});

//Clear

let clear = document.querySelector("#clear");

    clear.addEventListener("click", function (event) {
        document.getElementById("clear").value = "";
    });


    
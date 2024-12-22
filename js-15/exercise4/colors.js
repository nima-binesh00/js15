/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

// rgba(31, 127, 102, 1)
// rgba(255, 200, 0, 1)
// rgba(255, 123, 0, 1)
// rgba(216, 1, 1, 1)
// rgba(223, 4, 70, 1)
// rgba(127, 31, 85, 1) 
// rgba(93, 18, 199, 1)
// rgba(93, 18, 199, 1)
*/
let color = [
  " rgba(31, 127, 102, 1)",
  "rgba(255, 200, 0, 1)",
  "rgba(255, 123, 0, 1)",
  "rgba(216, 1, 1, 1)",
  "rgba(223, 4, 70, 1)",
  "rgba(127, 31, 85, 1)",
  "rgba(93, 18, 199, 1)",
];
let num = document.querySelector(".ww");
let num22f = document.querySelector(".p");
console.log(num);
for (let index = 0; index < 7; index++) {
  let span = document.createElement("div");
  span.style.backgroundColor = color[index];
  span.style.display = "inline-block";
  span.style.margin = "20px";
  span.style.outline = `${color[index]} 5px solid `;

  span.classList.add("div");
  let num = document.querySelector(".ww").append(span);
}

let befor = document.querySelectorAll(".div");
console.log(befor);
let num1 = 0;

let num22ch = document.createElement("div");
num22ch.classList.add("ch");
num22f.append(num22ch);
for (let index = 0; index < 5; index++) {
  let num12ch = document.createElement("div");
  num12ch.classList.add("num");
  num12ch.style.border = " solid 1px purple";
  num22ch.append(num12ch);
}
let img = document.createElement("img");
img.classList.add("img");
img.src = "./img/cat.png";
num22ch.append(img);
let div22 = document.querySelectorAll(".num");
console.log(div22);
for (const item of befor) {
  item.addEventListener("click", () => {
    for (const element of befor) {
      element.style.border = `${color[num1]} solid 0px`;
      num++;
    }
    let opacity = 1;

    for (const elemen2 of div22) {
      elemen2.style.border = "white";
      elemen2.style.backgroundColor = item.style.backgroundColor;
      elemen2.style.opacity = `${opacity}`;
      opacity = opacity - 0.2;
      console.log(opacity);
    }
    item.style.border = "white solid 5px";
  });
}

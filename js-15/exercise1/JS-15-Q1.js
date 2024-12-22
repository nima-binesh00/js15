// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
document.body.style.backgroundColor = "#0a122d";
document.querySelector("img").style.margin = "4rem 0";
document.querySelector("img").style.borderRadius = "1rem";
document.querySelector(".hero").style.position = "relative";
document.querySelector("h1").style.position = "absolute";
document.querySelector("h1").style.top = "80px";
document.querySelector("h1").style.left = "40px";
document.querySelector("h5").style.position = "absolute";
document.querySelector("h5").style.top = "110px";
document.querySelector("h5").style.left = "40px";

console.log();

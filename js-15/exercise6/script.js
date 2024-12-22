// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];
function printPersons(n) {
  for (const element of n) {
    let p = document.createElement("p");

    for (const key in element) {
      p.innerText += " " + element[key];
    }
    document.body.insertAdjacentElement("afterbegin", p);
  }
}

printPersons(persons);

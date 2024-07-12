// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function appendCat(name) {
    return [...cats, name];
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  function destructivelyAppendCat(name) {
    cats.push(name);
  }
   
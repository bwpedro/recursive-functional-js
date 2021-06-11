const { map, filter, reduce } = require("./functional-js");

function mapPlayground() {
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  const sum1 = (item) => item + 1;
  return map(sum1, numbers);
}

function filterPlayground() {
  const people = [
    { name: "Pedro", born: 1946 },
    { name: "José", born: 1921 },
    { name: "Maria", born: 1988 },
    { name: "João", born: 1912 },
    { name: "Augusto", born: 1945 },
    { name: "César", born: 1949 },
    { name: "Camila", born: 1954 },
    { name: "Rafael", born: 1998 },
  ];

  const bornAfterThe2ndWarP = (item) => item.born > 1945;
  return filter(bornAfterThe2ndWarP, people);
}

function reducePlayground() {
  const numbers = [10, 10, 10];

  const add = (stored, current) => stored + current;
  return reduce(add, 0, numbers);
}

console.log("MAP: ", mapPlayground());
console.log("FILTER: ", filterPlayground());
console.log("REDUCE: ", reducePlayground());

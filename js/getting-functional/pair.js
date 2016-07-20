// pair(obj)
// Construct array pairs from objects.

// Example Input

// var obj = {
//   "Brian": "Hague",
//   "Sarah": "Hanley",
//   "Lenny": "Urbanowski",
// };

// Example Output

// [ [ 'Brian', 'Hague' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]

var obj = {
  "Brian": "Hague",
  "Sarah": "Hanley",
  "Lenny": "Urbanowski",
};

var list = [];
for (var key in obj) {
  list.push([key, obj[key]])
}
console.log(list)

// pluck(arr, key)
// Given an array of objects, pluck the object values associated with the provided key.

// Example Input

var albums = [
  { name: 'Gossamer', artist: 'Passion Pit' },
  { name: 'Sigh no more', artist: 'Mumford and Sons' },
  { name: 'Time to Pretend', artist: 'MGMT' }
];

// Example Output

// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]

function pluck(arr, key) {
  var list = [];
  for (var row in arr) {
    // console.log()
    list.push(arr[row][key])
  }
  return list;
}

console.log(pluck(albums, 'artist'));

// zip(array, array2)
// Merge two arrays with the values at their corresponding positions

// Example Input

var artists = ['Passion Pit', 'Mumford and Sons', 'MGMT'];
var albums = ['Gossamer', 'Sigh no more', 'Time to Pretend'];

// Example Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]

function zip(one, two) {
  if (one.length === two.length) {
    var list = [];
    for (var item in one) {
      list.push( [one[item], two[item] ])
      // console.log(item)
    }
    console.log(list)
  }
}

zip(artists, albums)

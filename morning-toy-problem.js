// given the following array, randomize it.

const students = [
  'Dan',
  'Brack',
  'Erin',
  'Geordyn',
  'Jess',
  'Sarah',
  'Andrew',
  'Ryan',
  'Tim',
  'Stephen',
  'David',
  'Mark'
];

function randomize(arr){
    for(let i = 0; i<arr.length; i++){
        var r = Math.floor(Math.random() * i + 1);
        var temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp
    }
    return arr
}

console.log(randomize(students));

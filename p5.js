function make2DArray(cols,rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  } 
  return arr;
}

let grid;
let w = 1;
let cols,rows;

function setup() {
  createCanvas(400,400);
  cols = width / w;
}
let r = 6;
let pattern = "";

for (let i = 1; i <= r; i++) {

  for (let j = 0; j < i; j++) {
    if(i === r) {
      pattern += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        pattern += "*";
      }
      else {
        pattern += " ";
      }
    }
  }
  pattern += "\n";
}
console.log(pattern);

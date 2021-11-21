let r = 7;
let pattern = "";
for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= r - i; j++) {
        pattern += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === r) {
            // console.log("i=",i);
            pattern += "*";
        }
        else {
            if (k === 0 || k === 2 * i - 2) {
                // console.log("i=",i);
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

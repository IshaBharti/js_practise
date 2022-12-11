function *Numbers() {
    let num = 1;
    while(true) {
        yield num++;
    }
}
var gen = Numbers();

console.log(gen)
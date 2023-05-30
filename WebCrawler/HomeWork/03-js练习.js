function calc() {
    let odd = 0, even = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            even += i;
        } else {
            odd += i;
        }
    }
    return odd - even;
}

console.log(calc())
function numReverse(n) {
    let reversed = '';
    for (let i = 1; i <= n.length; i++) {
        reversed += n.at(-i);
    }
    console.log(reversed);
}
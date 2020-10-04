module.exports = function reverse(n) {
    const revNum = Math.abs(n).toString().split('').reverse().join('');
    return +revNum;
}

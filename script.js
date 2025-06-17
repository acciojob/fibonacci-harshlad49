function fibonacci(num) {

  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1;
  for (let i = 3; i <= num; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;

}

module.exports = fibonacci;

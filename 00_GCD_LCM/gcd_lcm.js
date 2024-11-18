function GCD(x, y) {
  while (x !== y) {
    if (x > y) {
      x = x - y;
    } else {
      y = y - x;
    }
  }
  return x;
}

console.log(GCD(2, 3));

function LCM(x, y, lcm, gcd) {
  gcd = GCD(x, y);
  lcm = Math.abs(x * y) / gcd;
  return lcm;
}

console.log(LCM(140, 120));
console.log(LCM(2, 3));

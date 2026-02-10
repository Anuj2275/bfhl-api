module.exports = (arr) => {
  if (!Array.isArray(arr)) throw Error()

  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  const lcm = (a, b) => (a * b) / gcd(a, b)

  return arr.reduce((acc, val) => lcm(acc, val))
}

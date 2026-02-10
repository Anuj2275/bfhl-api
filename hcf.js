module.exports = (arr) => {
  if (!Array.isArray(arr)) throw Error()

  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

  return arr.reduce((acc, val) => gcd(acc, val))
}

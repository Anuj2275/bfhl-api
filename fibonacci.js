module.exports = (n) => {
  if (typeof n !== 'number' || n < 0) throw Error()

  const res = []
  let a = 0, b = 1

  for (let i = 0; i < n; i++) {
    res.push(a)
    const temp = a + b
    a = b
    b = temp
  }

  return res
}

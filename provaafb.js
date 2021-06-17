// Primeiro Quesito

function someFun(params, callback) {
  callback(params.someProperty)

  return 1
}
// Segundo Quesito

function someFn(number) {
  const returnFunction = (value) => {
    switch (value) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return returnFunction
}
// Terceiro Quesito

function calculator(n1, n2) {
  return callback => callback(n1, n2)
}

function fatorizacao(a) {

    for (let i = a - 1; i >= 1; i--) {
      a *= i
    }
    return a;
  }

const fator = fatorizacao(8)
console.log(fator)
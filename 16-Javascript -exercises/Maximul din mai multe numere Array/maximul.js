var matrice = [1, 5, 6, 99, 654, -55, 23, 75, 6531, 4454, 32, 7]

function arataMaximul (matrice) {
  var maximul = Math.max(...matrice) // sau se poate folosit Math.min(...matrice)
  return maximul
}

console.log(arataMaximul(matrice))

// Alt test. Vreau sa generez N numere aleatorii prin functia math.random, sa le incarc intr-o matrice si apoi sa vad care este maximul. Just for fun.

function genereazaMatrice (numarMaxim) {
  var matrice = []
  for (let i = 0; i < 1000000; i++) {
    let randomNumber = Math.floor(Math.random() * numarMaxim) + 1
    matrice.push(randomNumber)
  }
  var maximul = Math.max(...matrice)
  console.log(maximul)
}

genereazaMatrice()

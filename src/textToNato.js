var letters = {
  "A": "Alpha", "B": "Bravo", "C": "Charlie",
  "D": "Delta", "E": "Echo", "F": "Foxtrot",
  "G": "Golf", "H": "Hotel", "I": "India",
  "J": "Juliett", "K": "Kilo", "L": "Lima",
  "M": "Mike", "N": "November", "O": "Oscar",
  "P": "Papa", "Q": "Quebec", "R": "Romeo",
  "S": "Sierra", "T": "Tango", "U": "Uniform",
  "V": "Victor", "W": "Whiskey", "X": "X-ray",
  "Y": "Yankee", "Z": "Zulu"
}
const nato = (word) => {
  let result = [];
  word = word.split('').map(x => x.toUpperCase())
  for (let i of word) {
    result.push(letters[i])
  }
  console.log(result.join(' '))
  return result.join(' ');
}
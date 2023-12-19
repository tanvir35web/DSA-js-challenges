function countOccurrences(word, letter) {
    let counter = 0;
    word.split("").map((item) => {
      if (item === letter) {
          counter += 1;
      }
    });
    return counter;
  }

module.exports = countOccurrences;




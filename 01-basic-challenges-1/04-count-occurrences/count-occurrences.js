function countOccurrences(word, letter) {
    let counter = 0;
    // word.split("").map((item) => {
    //   if (item === letter) {
    //       counter += 1;
    //   }
    // });

    for (i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        counter++;
      }
    }


    return counter;
  }


module.exports = countOccurrences;




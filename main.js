function findCountLetterOfBiggestWord (array) {
  let maxCount = 0;
  
  for (let i = 0; i <= array.length - 1; i++) {
    let length = array[i].trim().split(" ").length;
  
    if (length > maxCount ) {
      maxCount = length
    }
  }
  
  return maxCount
}

const arr = ["Hello world", "This is a great solution", "How are you"]

findCountLetterOfBiggestWord(arr)
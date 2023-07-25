function jasonsDesiredResult(sentence, limit) {
  // this will split sentence into array of words
  const splittedSentence = sentence.split(" ");

  // this is the array where we store the resulting lines
  let resultingArray = [];

  // variable that keeps track of the current line
  let currentLine = "";

  // this will loop through each word in the sentence
  for (let word of splittedSentence) {
    // this will check if the length of the current word is greater than the limit
    if (word.length > limit) {
      // throw error its true (its greater)
      console.log("can't be parsed");
      break;
    }

    // there should be something here that defines the next word

    // if were gonna compare the first word to our second word
    // the difference is that the first word has no space before it
    // but the second word has a space before it

    // if currentLine.length is 0, then our current word is our first word
    // create a condition when will we add a space before the word which is:
    //  (add space before the word if it's not the first word, then vice versa)
    const maybeWithSpaceMaybeNot = currentLine.length > 0 ? " " : "";
    const wordMaybeWithSpaceOrMaybeNoSpace = maybeWithSpaceMaybeNot + word;

    // if currentLine.length is not 0 then it is not the first word in the current line / its the next word

    // check if the length of the current line plus the length of the next word is less than the limit
    if (currentLine.length + wordMaybeWithSpaceOrMaybeNoSpace.length <= limit) {
        // if current line length + next word length is less than the limit
        // add the next word to the current line
      currentLine += wordMaybeWithSpaceOrMaybeNoSpace;
    } else {
        // if current line length + next word length is greater than the limit
        // create/start a new line
        // but before we can create/add a new line, we have to push currentLine to the resultingArray (just like saving progress lol)
        resultingArray.push(currentLine);
        

    }


  }

  return resultingArray;
}

console.log(jasonsDesiredResult("Hello, my name is Jason", 10));

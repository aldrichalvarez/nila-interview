// hello, my name is Jason
// 10

// two inputs
// string

// - remove trailing spaces
// - catch: if unable to fit for example 4 characters, cant split the word

// return an error that says youc ant aprse

// ['Hello, my', 'name is', 'Jason']

function jasonsDesiredResult (sentence, number) {
    
    // if
    // ["hello,", "my", "name", "is", "jason"]

    // 1 split sentence
    const splittedSentence = sentence.split(" ")

    // const cars = ["BMW", "Volvo", "Mini"];

    // let text = "";
    // for (let x of cars) {
    //   text += x;
    // }

    let result = []
    for (let x of splittedSentence) {
        if (x.length > number) {
            console.log("can't be parsed")
            break
        } else {
            // added to result
            // check if the next word's character length + the whole nu
        }

    }

    // commits for every edit
    // comments
    // loom

    // focus more on problem solving

    // whats hard, whats wrong

    // 10pm

    // particles

    // if (splittedSentence[])


    // 2 check number of characters

    // if number is > 10 then return error

    // if number is < 10, add that word in the result










    // 3

    // 

    return result
}

console.log(jasonsDesiredResult("Hello, my name is Jason", 3))
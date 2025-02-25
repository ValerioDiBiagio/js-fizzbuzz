// Il programma deve stampare i numeri da 1 a 100

let word;

for (let i = 1; i <= 100; i++) {

    // Condizioni
    
    if (i % 3 === 0 && i % 5 === 0) {
        word="FizzBuzz";
        console.log(word);
    } else if (i % 5 === 0) {
        word="Buzz";
        console.log(word);
    } else if (i % 3 === 0) {
        word="Fizz";
        console.log(word);
    } else {
        console.log(i);
    }
}



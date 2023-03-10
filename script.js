
// Write a recursive function that takes an integer count and 
//returns an array containing integers from 0 to count (inclusive).
//     ex. - when countUp(3) is called, the output should be: [0, 1, 2, 3]

var countUp = count => {
    // If count is not an array convert it to an array, assign 
    // the initial value of count as the first array value of
    // the array and call countUp.
    if (Array.isArray(count) === false) {
        let countStart = count;
        count = [];
        count.unshift(countStart);
        countUp(count);
        return count;
    } else {
        // If count is an array and first value is greater than
        // 0, insert a new array item at the start of the array
        // that is one less than the previous number.
        if (count[0] > 0) {
            count.unshift(count[0] - 1);
            countUp(count);
        }
    };
};

console.log(countUp(5));


//Rock Paper Scissors Possibilities
const rockPaperScissors = (numberOfThrows) => {
    const result = [];
    const choices = ['rock', 'paper', 'scissors'];

    const recurse = (currentPlay) => {
        if (currentPlay.length === numberOfThrows) {
            result.push(currentPlay);
            return;
        }
    
        for (let i =0; i< choices.length; i += 1) {
            const currentChoice = [choices[i]];
            const nextPlay = currentPlay.concat(currentChoice);
            recurse(nextPlay);
        }
    };

    recurse ([]);

    return result;
};

console.log(rockPaperScissors(2));
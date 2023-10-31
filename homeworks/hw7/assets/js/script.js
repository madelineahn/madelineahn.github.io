function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let result = sum / [a, b, c].length;
    return result;
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max) {
    return Math.random() * max;
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = averageThreeNumbers(x, y, z);
let sentence = createSentence(avg, 'frog');
console.log(sentence);

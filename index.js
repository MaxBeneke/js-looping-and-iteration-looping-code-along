// Code your solutions in this file
function writeCards(array, eventName) {
    for (let i = 0; i < array.length; i++) {
        array[i] = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
    }
    return array;
}

function countDown(num) {
    console.log(num);
    if (num > 0) {
        countDown(num - 1);
    }
}
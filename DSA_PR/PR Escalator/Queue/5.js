// 5. Generate binary numbers from 1 to n using a queue.

function generateBinaryNumbers(n) {
    let queue = [];
    let result = [];

    queue.push("1");

    for (let i = 0; i < n; i++) {
        let current = queue.shift();
        result.push(current);

        queue.push(current + "0");
        queue.push(current + "1");
    }

    return result;
}

console.log(generateBinaryNumbers(5));
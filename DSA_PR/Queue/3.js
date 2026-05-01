// 3. Find the first non-repeating character in a stream.

function firstNonRepeatingStream(stream) {
    let freq = {};
    let queue = [];
    let result = [];

    for (let ch of stream) {
        freq[ch] = (freq[ch] || 0) + 1;

        queue.push(ch);

        while (queue.length > 0 && freq[queue[0]] > 1) {
            queue.shift();
        }

        result.push(queue.length > 0 ? queue[0] : -1);
    }

    return result;
}

console.log(firstNonRepeatingStream("aabc"));
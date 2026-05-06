// 4. Check if a string is a palindrome using deque.

function isPalindrome(str) {
    let deque = str.split("");

    while (deque.length > 1) {
        let front = deque.shift();
        let back = deque.pop();

        if (front !== back) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("madam"));   
console.log(isPalindrome("bob")); 
console.log(isPalindrome("hello"));   
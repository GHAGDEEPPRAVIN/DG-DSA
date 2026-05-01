// 3. Check if parentheses are balanced in a string.

function isBalanced(str) {
    let stack = [];

    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0) return false;

            let top = stack.pop();

            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("({[]})")); 
console.log(isBalanced("({[})]")); 
console.log(isBalanced("((("));    
console.log(isBalanced("()[]{}")); 
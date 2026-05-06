// 4. Evaluate a postfix expression.

function evaluatePostfix(expr) {
    let stack = [];

    for (let char of expr) {

        if (!isNaN(char)) {
            stack.push(Number(char));
        }

        else {
            let b = stack.pop();
            let a = stack.pop();

            switch (char) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            }
        }
    }

    return stack.pop();
}


console.log(evaluatePostfix("23+"));    
console.log(evaluatePostfix("52+6*"));  
console.log(evaluatePostfix("82/3-"));  
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    let res = 0;

    for (let op of operations) {
        if (!isNaN(op)) {
            let num = Number(op);
            stack.push(num);
            res += num;
        } 
        else if (op === "C") {
            res -= stack.pop();
        } 
        else if (op === "D") {
            let val = stack[stack.length - 1] * 2;
            stack.push(val);
            res += val;
        } 
        else if (op === "+") {
            let val = stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(val);
            res += val;
        }
    }

    return res;
};
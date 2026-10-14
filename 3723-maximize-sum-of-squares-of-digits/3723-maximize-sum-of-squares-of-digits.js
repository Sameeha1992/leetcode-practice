/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    if(sum===0 || sum >(num * 9)){
        return ""
    }

let result =""
    for(let i=0;i<num;i++){
       let digit = Math.min(9,sum);
       result+=digit;
       sum-= digit
    }
    return result
};
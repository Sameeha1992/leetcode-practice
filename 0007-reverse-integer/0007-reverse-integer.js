/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max_Int = (2 ** 31)-1
    let min_Int = -(2 ** 31)

    let res=0;

    while(x !==0){
        let digit = x % 10
         x = Math.trunc(x/10)
        res=res * 10 +digit

        if(res < min_Int || res > max_Int){
            return 0
        }
    }

    return res
};
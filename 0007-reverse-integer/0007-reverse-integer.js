/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let resArr=[]
    let str= String(x);
     for(let i=str.length-1;i>=0;i--){
        if(str[i] !=="-"){
            resArr.push(str[i])
        }else{
            resArr.unshift(str[i])
        }
     }
     let res = resArr.join("");

      if (res < -2147483648 || res > 2147483647) {
        return 0;
    }
     return Number(res)
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
   
    let i=0;
    let j=0;
    let count=0
    while(i<t.length && j <s.length){
        if(t[i] === s[j]){
          count++;
          i++;
          j++
        }else{
            i++
        }
    }
   return count === s.length
};
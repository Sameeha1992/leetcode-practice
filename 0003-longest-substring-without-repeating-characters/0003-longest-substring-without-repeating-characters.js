/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let maxNumber =0;
    let left =0;
    let right=0;
    while(left <s.length && right <s.length){
        if(!set.has(s[right])){
            set.add(s[right]);
            right++;
            maxNumber = Math.max(maxNumber,right-left)
        }else{
         set.delete(s[left]);
           left++
        }
        
    }
    return maxNumber
};
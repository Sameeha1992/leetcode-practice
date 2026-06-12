/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count=0;
    let vowels="aeiouAEIOU";
    for(let i=0;i<k;i++){
        if(vowels.includes(s[i])){
            count++
        }
    }
    let maxCount=count;
    for(let j=k;j<s.length;j++){
        if(vowels.includes(s[j-k])){
            count--
        }
        if(vowels.includes(s[j])){
            count++
        }

        if(count > maxCount){
            maxCount= count
        }
    }
    return maxCount
};
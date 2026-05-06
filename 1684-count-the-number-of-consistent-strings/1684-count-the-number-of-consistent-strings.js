/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let allow = new Set(allowed);
    let count=0
    for(let word of words){
        let isValid = true
        for(let ch of word){
            if(!allow.has(ch)){
                isValid = false 
                break
            }
        }
        if(isValid === true) count++
        
    }
    return count
};
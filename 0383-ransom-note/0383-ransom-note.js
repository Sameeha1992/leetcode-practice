/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let freq={};

    for(let mag of magazine){
        freq[mag] = (freq[mag] ||0)+1;
       
    }
    for(let rans of ransomNote){
        if(freq[rans]){
            freq[rans]--
        }else{
            return false
        }
    }
    return true
    
};
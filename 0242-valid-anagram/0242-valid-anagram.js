/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
let freq={}
if(s.length !== t.length) return false
for(let i=0;i<s.length;i++){
    freq[s[i]] = (freq[s[i]] ||0)+1
}

for(let j=0;j<t.length;j++){
    if(freq[t[j]]){
        freq[t[j]]--
    }else{
        return false
    }
}

return true
};
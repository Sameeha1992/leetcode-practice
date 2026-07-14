/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
let sArray = new Array(26).fill(0);
let a= "a".charCodeAt(0)
if(s.length !== t.length) return false

for(let i=0;i<s.length;i++){
    sArray[s.charCodeAt(i) - a]++;
    sArray[t.charCodeAt(i) -a]--;

}

for(let count of sArray){
    if(count !==0){
        return false
    }
}

return true
};
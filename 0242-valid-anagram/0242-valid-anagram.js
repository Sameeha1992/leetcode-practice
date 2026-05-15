/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
let sWord = s.split("").sort().join("");
let tWord = t.split("").sort().join("");

if(sWord !== tWord){
    return false
}
return true
};
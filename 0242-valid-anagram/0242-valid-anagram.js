/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let sRes=s.split("").sort().join("");
    let tRes = t.split("").sort().join("")
   if(sRes === tRes) return true
   
   return false



};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj ={};
    for(let i=0;i<strs.length;i++){
        let word = strs[i].split("").sort().join("");
        if(!obj[word]){
            obj[word] =[]
        }
        obj[word].push(strs[i])
    }
    return Object.values(obj)
};
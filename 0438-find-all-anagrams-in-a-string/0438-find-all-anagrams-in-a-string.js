/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);
    let result=[]
    let a="a".charCodeAt(0);
    for(let i=0;i<p.length;i++){
        pCount[p.charCodeAt(i)-a]++;
        sCount[s.charCodeAt(i)-a]++;
    }
    if(pCount.toString() === sCount.toString()) result.push(0);

    for(let i=p.length;i<s.length;i++){
        sCount[s.charCodeAt(i)-a]++;
        sCount[s.charCodeAt(i-p.length)-a]--;

        if(pCount.toString() === sCount.toString()) result.push(i-p.length+1)
    }
    
    return result
};
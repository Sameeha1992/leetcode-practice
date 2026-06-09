/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let freq={}
    let vowel = "aeiouAEIOU"
    let arr=[]
    for(let i=0;i<s.length;i++){
        if(vowel.includes(s[i])){
            freq[s[i]] = (freq[s[i]] ||0)+1
        }
        
    }
    let sortedArr=Object.entries(freq);
    sortedArr.sort((a,b)=>b[1]-a[1]);
    

    for(let i=0;i<sortedArr.length;i++){
        let char = sortedArr[i][0];
        let count = sortedArr[i][1]
        for(let j=0;j<count;j++){
            arr.push(char)
        }
        
    }

    let k=0;
    let res = s.split("");
    for(let i=0;i<res.length;i++){
        if(vowel.includes(res[i])){
            res[i] = arr[k];
            k++
        }
    }

return res.join("")

    
};
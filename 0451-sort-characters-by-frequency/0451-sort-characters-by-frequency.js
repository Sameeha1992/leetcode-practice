/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {

    let freq={};
    let res=""
    for(let i=0;i<s.length;i++){
        freq[s[i]] = (freq[s[i]] ||0)+1;
    }

    let sortedData = Object.entries(freq).sort((a,b)=>b[1] -a[1]);
   for(let [key,count] of sortedData){
    res+=key.repeat(count)
   }
  
  return res
};
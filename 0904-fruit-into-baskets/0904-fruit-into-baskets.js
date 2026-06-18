/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let freq={};
    let left=0;
    let maxCount=0
    for(let i=0;i<fruits.length;i++){
        freq[fruits[i]] =(freq[fruits[i]] ||0)+1;

        while(Object.keys(freq).length >2){
            freq[fruits[left]]--;

            if(freq[fruits[left]] ===0){
               delete freq[fruits[left]]
            }
            left++
        }
        maxCount= Math.max(maxCount,i-left+1)
    }
    return maxCount
};
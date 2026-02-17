/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let freq={}
    for(let i=0;i<arr.length;i++){
        freq[arr[i]] = (freq[arr[i]] ||0)+1;
    }

let max=0
    for(let key in freq){
        
        if(freq[key] === parseInt(key)){
            max = Math.max(max,parseInt(key))
            console.log(max)
        }

    }

       return max ? max :-1
   
};
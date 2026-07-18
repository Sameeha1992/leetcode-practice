/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min= Infinity;
    let max =- Infinity;
    for(let i=0;i<nums.length;i++){
      max = Math.max(max,nums[i]);
      min = Math.min(min,nums[i]);

    }

let res = gCD(max,min);
return res

    
};

function gCD(a,b){
    while(b !==0){
  let reminder = a % b;
    [a,b] = [b,reminder]
    }
   return a
}
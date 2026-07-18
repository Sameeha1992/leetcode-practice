/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min= nums[0]
    let max =nums[0]
    for(let i=1;i<nums.length;i++){
    if(nums[i] < min){
        min = nums[i]
    }
      if(nums[i] > max){
        max = nums[i]
      }

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
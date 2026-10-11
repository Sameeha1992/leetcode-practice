/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let pro=1;
    let sum=0
    for(let i=0;i<nums.length;i++){
        if(nums.length % (i+1) ===0){
          pro = nums[i]* nums[i]
           sum+=pro
        }
       
        
    }
    return sum
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count=1
    let max=0
    if(nums.length <=1) return nums.length
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] < nums[i+1]){
           count++
        }else{
            count=1
        }
        max = Math.max(max,count)
    }

return max
};
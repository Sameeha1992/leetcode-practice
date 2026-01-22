/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max=0
  let res=Math.abs(nums[nums.length-1] - nums[0])
  
  for(let i=1;i<nums.length;i++){
     let diff = Math.abs(nums[i] - nums[i-1])
     max = Math.max(max,diff)
     
  }
  
  return Math.max(max,res)
};
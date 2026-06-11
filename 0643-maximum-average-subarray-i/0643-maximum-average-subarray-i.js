/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let window =0

    for(let i=0;i<k;i++){
        window +=nums[i]
    }


let max = window;
    for(let j=k;j<nums.length;j++){
        window = window-nums[j-k]+nums[j];
        max = Math.max(max,window)
    }
    return max/k
};
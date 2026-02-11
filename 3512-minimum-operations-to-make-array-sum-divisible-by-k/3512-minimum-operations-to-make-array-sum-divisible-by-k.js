/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum=0;
    let reminder=0;

    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }

    reminder = sum % k;
    return reminder
};
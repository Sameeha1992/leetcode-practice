/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    nums = nums.map(n=>n*n)
    nums.sort((a,b)=>a-b)
    let left =0;
    let right =nums.length-1;
    let add=0;
    let sub=0

    for(let i=0;i<nums.length;i++){
        if(i %2 ===0){
         add += nums[right]
         right--
        }else{
            sub+=nums[left]
            left++
        }
    }
    return add-sub
};
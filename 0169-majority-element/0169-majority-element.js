/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count=0;
    let elem
    for(let i=0;i<nums.length;i++){
         if(count ===0){
            count=1;
            elem = nums[i]
         }
        else if(nums[i] === elem){
            count++
         }else{
            count--
         }
    }
    return elem
    let count1=0;
    for(let i=0;i<nums.length;i++){
         if(nums[i] === elem){
            count1++
         }
    }
    if(count1 > nums.length/2){
        return elem
    }
    return -1
};
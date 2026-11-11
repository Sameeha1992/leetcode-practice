/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr=[]
for(let i=0;i<nums.length;i++){
    let a = target - nums[i];
    
    if(nums.includes(a)){
        let index = nums.indexOf(a);

        if(index !==i){
            arr.push(i);
            arr.push(index)

            return arr
        }
    }
}
console.log(arr)
};
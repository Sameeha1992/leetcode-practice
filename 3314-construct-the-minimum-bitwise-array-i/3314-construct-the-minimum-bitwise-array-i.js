/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    let ans = [];

    for (let num of nums) {
        let found = -1;

        for (let x = 0; x <= num; x++) {
            if ((x | (x + 1)) === num) {
                found = x;
                break; // smallest found
            }
        }

        ans.push(found);
    }

    return ans;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    return computeRec(nums, 0, nums.length - 1, 0, 0, 0);
    
    
};

var computeRec = function(nums, left, right, score1, score2, turn) {
    if (left > right) {
        return score1 >= score2;
    }
    if (turn % 2 == 0) {
        return computeRec(nums, left + 1, right, score1 + nums[left], score2, turn + 1) ||
            computeRec(nums, left, right - 1, score1 + nums[right], score2, turn + 1);
    } else {
        return computeRec(nums, left + 1, right, score1, nums[left] + score2, turn + 1) &&
            computeRec(nums, left, right - 1, score1, nums[right] + score2, turn + 1);
    }
}
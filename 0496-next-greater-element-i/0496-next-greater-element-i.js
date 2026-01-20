/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res=[]
    for(let i=0;i<nums1.length;i++){
        let found = false
        for(let j=0;j<nums2.length;j++){
            if(nums1[i] === nums2[j]){
                
                for(let k=j+1;k<nums2.length;k++){
                    if(nums2[k] > nums2[j]){
                        res.push(nums2[k])
                        found= true;
                        break
                    }
                }
                break
            }
        }
        if(!found){
            res.push(-1)
        }

        
}
return res
}
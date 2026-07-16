/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
     let max= 0;
    let prefixGcd =[]
    
    for(let num of nums){
        max = Math.max(max,num);
        let res = gcdFind(max,num)
        prefixGcd.push(res)
        
    }
    prefixGcd.sort((a,b)=>a-b);
    
    let i=0;
    let j=prefixGcd.length-1;
    let sum=0
    
    while(i< j){
        let ans = gcdFind(prefixGcd[i],prefixGcd[j]);
        i++;
        j--
        sum+=ans
    }
    

    return sum
};


function gcdFind(a,b){
 
  while(b !==0){
  [a,b] = [b,a%b]
       
  }
  return  a
}
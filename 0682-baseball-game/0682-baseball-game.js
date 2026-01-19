/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let sum=0
    let ops =operations
    let arr=[]
    let last=0
    let total=0
    let res=0
   for(let i=0;i<ops.length;i++){
    if(!isNaN(ops[i])){
        arr.push(Number(ops[i]))
        console.log(arr)
    }else if(ops[i] === "C"){
       arr.pop()
    }else if(ops[i] === "D"){
       
       arr.push(arr[arr.length-1]*2)
    }else if(ops[i] === "+"){
      arr.push(arr[arr.length-1]+ arr[arr.length-2])
    }
    
     
                       
   }

   for(let i=0;i<arr.length;i++){
      res+=arr[i]
   }
   return res
};
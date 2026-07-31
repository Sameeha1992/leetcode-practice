/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {

    let obj ={}
    let count=0
    for(let ch of word){
        obj[ch] = (obj[ch]||0)+1;
    }
    let values = Object.values(obj).sort((a,b)=>b-a);
   
   for(let i=0;i<values.length;i++){
    let pushes = Math.floor((i/8)+1);
    count+=values[i] * pushes;
   

   }
   return count
    
};
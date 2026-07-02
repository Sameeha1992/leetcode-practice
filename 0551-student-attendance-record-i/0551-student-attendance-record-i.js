/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absCount=0;
    let consLeav =0;
    
    
    for(let i=0;i<s.length;i++){
       if(s[i] === "A"){
        absCount++
       }
       if(s[i] === "L"){
        consLeav++
        if(consLeav ===3) return false
    
       }else{
        consLeav =0
       }
    }

    if(absCount >1) return false
   return true
    
};
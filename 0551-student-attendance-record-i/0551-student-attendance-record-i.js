/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absCount=0;
    let consLeav =0;
    let maxCons=-Infinity
    let sS = s.split("")

    for(let i=0;i<sS.length;i++){
       if(sS[i] === "A"){
        absCount++
       }
       if(sS[i] === "L"){
        consLeav++
        if(consLeav ===3) return false
    
       }else{
        consLeav =0
       }
    }

    if(absCount >1) return false
   return true
    
};
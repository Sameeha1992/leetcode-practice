/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let needed =0;
    let insertion =0;

    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            if(needed % 2 !==0){
                insertion++;
                needed--
            }
            needed+=2
        }else{
            needed--;

            if(needed <0){
                insertion++;
                needed=1
            }
        }
    }
        return insertion+needed
};
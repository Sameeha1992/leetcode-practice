/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let res=""
    let ans=""
    let knowldge = Object.fromEntries(knowledge)
    console.log(knowldge)
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            let j=i+1
        for(;s[j] !== ")";j++){
            res+=s[j]

        }
        if(knowldge[res]){
           ans+=knowldge[res]
            
        
        }else{
            ans+="?"
        }
       res=""
        i=j
        }else{
            ans+=s[i];
            
            
            
        }
        

    }
    return ans
};
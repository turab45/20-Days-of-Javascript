/*
******** CHALLANGE LINK: https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen



 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var constants='';
    for(var i in s){
        if(s[i]=='a' || s[i]=='i' || s[i]=='o' || s[i]=='e' || s[i]=='u' ){
            console.log(s[i]);
        }else{
            constants+=s[i]+"\n";
        }
        
    }
    console.log(constants);
    
}


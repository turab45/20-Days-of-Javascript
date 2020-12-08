/*

***************** CHALLANGE LINK: https://www.hackerrank.com/challenges/js10-regexp-1/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen


*/


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    var re = /^([aeiou]).*(?<=\1)$/;
    
    /*
     * Do not remove the return statement
     */
    
    return re;
}

/*
It is a problem given in the sample test of hackerrank js basics

********** CHALLANGE LINK:https://www.hackerrank.com/test/143hd7jsid6/questions/521e954e6ff11


*/

function fizzBuzz(n) {
    for(var i=1; i<=n; i++){
        if(i%3==0 && i%5==0)
        console.log('FizzBuzz');
        else if(i%3==0 && i%5!=0)
        console.log('Fizz');
        else if(i%3!=0 && i%5==0)
        console.log('Buzz');
        else
        console.log(i);
    }

}

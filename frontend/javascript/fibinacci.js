//In the Fibonacci series, a number is the sum of the previous 2 numbers that came before it.//
//mean's 0+1=1,1+1=2,1+2=3
//0,1,1,2,3
function fibonacci(num)
{
    let t1=0,t2=1,temp;
    for(let i=1; i<=num; i++)
    {
        console.log(t1);
        temp=t1+t2;
        t1=t2;
        t2=temp;
    }
}
console.log(fibonacci(10));






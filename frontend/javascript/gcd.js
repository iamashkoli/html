//Greatest Common Divisor//
function gcd(n1,n2)
{
    while(n2!=0)
    {
        let rem=n1%n2;
        n1=n2;
        n2=rem;
    }
    return n1;
}
console.log(gcd(60,20));













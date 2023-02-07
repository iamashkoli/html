function swap(a,b,temp)
{
    temp=a;
    a=b;
    b=temp;
    console.log("a:",a);
    console.log("b",b);
}
console.log(swap(10,20));
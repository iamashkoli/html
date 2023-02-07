function factorial(num)
{
    let fact=1;
   if(num == 0)
   {
    return 1;
   }
   return num * factorial(num-1);
   
}
console.log(factorial(4));
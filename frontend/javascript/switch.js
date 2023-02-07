/*let days=1;
switch(days)
{
    case 1:
        console.log("Monday");
            break;
    case 2:
        console.log("Tuesday");
            break;
    case 3:
        console.log("Wendensday");
            break;
    case 4:
        console.log("Thursday");
            break;
    case 5:
        console.log("Friday");
            break;
    case 6:
        console.log("saturday");
            break;
    default:
        console.log("SUNDAY is Holiday...");
            break;
}
*/

//1.Make a Calculator. Take 2 numbers (a & b) from the user and an operation as follows : 

/*function Calculator(a,b,operator)
{
    switch(operator)
    {
        case '+':
                return a+b
                break;
        
        case '-':
                return a-b
                break;

        case '*':
                return a*b
                break;

        case '/':
                return a/b
                break;

        case '%':
                return a%b
                break;
       
    }
    
}console.log(Calculator(10,20,'%'));*/

//2.	Ask the user to enter the number of the month & print the name of the month. For eg - For ‘1’ print ‘January’, ‘2’ print ‘February’ & so on.
function monthName(monthNo)
{
    switch(monthNo)
    {
        case 1:
            return ("January");
            break;
        case 2:
            return ("February");
            break;

        case 3:
            return ("March");
            break;

        case 4:
            return ("April");
            break;
        
        case 5:
            return ("May");
            break;

        case 6:
            return("June");
            break;

        case 7:
            return("July");
            break;

        case 8:
             return("August");
             break;

        case 9:
            return ("Septembar");
            break;

        case 10:
             return ("October");
             break;

        case 11:
            return ("Novembar");
            break;
        case 12:
             return ("December");
             break;
    }
}
console.log(monthName(12));
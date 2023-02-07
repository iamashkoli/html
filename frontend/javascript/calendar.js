function GetDates(startDate,daysToAdd)
{
    var aryDate=[];
    for(let i=0; i<=daysToAdd; i++)
    {
        let currentDate=new Date();
        currentDate.setDate(startDate.getDate()+i);
        aryDate.push(DayAsString(currentDate.getDay())+ "," +currentDate.getDate()+""+MonthAsString(currentDate.getMonth())+""+currentDate.getFullYear());

    }
    return aryDate;
}
function MonthAsString(monthindex)
{
    let d=new Date();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = " March";
    month[3] = " April";
    month[4] = " May";
    month[5] = " June";
    month[6] = " July";
    month[7] = " August";
    month[8] = " September";
    month[9] = " October";
    month[10] = "November ";
    month[11] = " December";

    return month[monthindex];
}
function DayAsString(dayindex)
{
    let weekdays = new Array();
    weekdays[0]= "Sunday";
    weekdays[1]= "Monday";
    weekdays[2]= "Tuesday";
    weekdays[3]= "Wedenesday";
    weekdays[4]= "Thursday";
    weekdays[5]= "Friday";
    weekdays[6]= "Saturday";

    return weekdays[dayindex];
}
let startDate=new Date();
let aryDate =GetDates(startDate,7);
console.log(aryDate);
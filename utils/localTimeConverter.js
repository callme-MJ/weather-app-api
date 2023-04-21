import { DateTime } from "luxon";

export const formatToLocalTime = (secs,
    zone,
    format= "cccc, dd LLL yyyy' | 'hh:mm a")=>
    // {
    // var myDate = new Date( secs *1000);
    // return (myDate.toDateString()+" "+ myDate.toLocaleTimeString());}

     {
    const date = DateTime.fromSeconds(secs).setZone(zone);
    return date.toFormat(format);
     }
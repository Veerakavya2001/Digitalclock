import { useState,useEffect } from "react";
export default function DigitalClock(){
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        const itervalid=setInterval(()=>{setTime(new Date())},
        1000)
    return()=>{
        clearInterval(itervalid)
    }},[]);
    function formattingtime(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
       let merdian= hours>12?"PM":"AM";
        minutes=minutes<10?"0"+minutes :minutes;
        seconds=seconds<10?"0"+seconds :seconds;
        hours=hours%12||12
       return `${hours}:${minutes}:${seconds} ${merdian}`

    }
  
 return(
    <div className="clock-container">
        <div className="clock">
          <span>{formattingtime()}</span>
          
        </div>

    </div>
 )
}
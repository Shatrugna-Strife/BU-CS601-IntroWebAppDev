import React, { useEffect, useState } from "react";
import clock from "./clock.png"


export default function ImageTime(){
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());

    let [time, setTime] = useState([h,m]);

    useEffect(()=>{
        setInterval(()=>{
            const d = new Date();
            let h = addZero(d.getHours());
            let m = addZero(d.getMinutes());
            setTime([h,m])
        },100)
    },[]);

    return(
        <div>
            <div  style={{"position":"relative", display:"inline-block"}}>
                <img src={clock}/>
                <span style={{"position":"absolute", "top":"220px", "left":"60px", "color":"rgba(64,250,0,255)", fontSize:"4rem"}}>{time[0]}</span>
                <span style={{"position":"absolute", "top":"220px", right:"60px", "color":"rgba(64,250,0,255)", fontSize:"4rem"}}>{time[1]}</span>
            </div>
        </div>
    )
}
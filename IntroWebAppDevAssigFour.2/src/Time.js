import React, { useEffect, useState } from "react";


export default function Time(){
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());

    let [time, setTime] = useState([h,m,s]);

    useEffect(()=>{
        setInterval(()=>{
            const d = new Date();
            let h = addZero(d.getHours());
            let m = addZero(d.getMinutes());
            let s = addZero(d.getSeconds());
            setTime([h,m,s])
        },100)
    },[]);

    return(
        <>
            <p>{time[0]}:{time[1]}:{time[2]}</p>
        </>
    )
}
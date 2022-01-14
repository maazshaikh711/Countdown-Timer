const day      =document.getElementById("days")
const hour =document.getElementById("hours")
const minute =document.getElementById("minutes")
const second =document.getElementById("seconds")

function countdown(){
    const currentDate=new Date();
    const newyearDate=new Date("2023-01-Jan")
    const totalsecond= (newyearDate-currentDate)/1000;
    const days=Math.floor(totalsecond/3600/24)
    const hours=Math.floor(totalsecond/3600)%24
    const minutes=Math.floor(totalsecond/60)%60
    const seconds=Math.floor(totalsecond%60)
    // console.log(newyearDate-currentDate )
    console.log(days,hours,minutes,seconds)
    day.innerHTML=days
    hour.innerHTML=hours
    minute.innerHTML=minutes
    second.innerHTML=seconds
}
countdown()
setInterval(countdown,1000)
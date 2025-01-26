let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displayTime(){
    let date=new Date();
    //getting hours,min,sec from date
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let hRotate=30*h+m/2;
    let mRotate=6*m;
    let sRotate=6*s;

    hr.style.transform=`rotate(${hRotate}deg)`;
    min.style.transform=`rotate(${mRotate}deg)`;
    sec.style.transform=`rotate(${sRotate}deg)`;
}
setInterval(displayTime,1000);
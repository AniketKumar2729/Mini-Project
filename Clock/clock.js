// setInterval(() => {
//   date = new Date();
//   hourTime = d.getHours();
//   minuteTime = date.getMinutes();
//   secondTime = date.getSeconds();
//   hour_rotation = 30 * hourTime + minuteTime / 2;
//   minute_rotation = 6 * minuteTime;
//   second_rotation = 6 * secondTime;
//   hour.style.transform = `rotate(${hour_rotation}deg)`;
//   minute.style.transform = `rotate(${minute_rotation}deg)`;
//   second.style.transform = `rotate(${second_rotation}deg)`;
// }, 1000);
setInterval(() => {
    date = new Date();
    //ME
    ndate=date.getDate();
    nmonth=date.getMonth();
    nyear=date.getFullYear();
    //me
    hourTime = date.getHours();
    minuteTime = date.getMinutes();
    secondTime = date.getSeconds();
    hour_rotation = 30*hourTime + minuteTime/2;
    minute_rotation = 6*minuteTime;
    second_rotation = 6*secondTime;

    hour.style.transform = `rotate(${hour_rotation}deg)`;
    minute.style.transform = `rotate(${minute_rotation}deg)`;
    second.style.transform = `rotate(${second_rotation}deg)`;
    date.innerHTML=`${ndate}`;
    month.innerHTML=`${nmonth}`;
    year.innerHTML=`${nyear}`;
}, 1000);

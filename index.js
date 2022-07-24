//document.addEventListener('DOMContentLoaded', function(e){
    var hourHtml = document.getElementById('hour');
    var minuteHtml = document.getElementById('minute');
    var secondHtml = document.getElementById('second');
    var hundredtHtml = document.getElementById('hundredth');
    var btnStart = document.getElementById('btn_start');
    var btnStop = document.getElementById('btn_stop');
    var btnReset = document.getElementById('btn_reset');
    var hour = 0;
    var minute = 0;
    var second = 0;
    var hundredth = 0;
    var control;

    btnStart.onclick =  function(e){
        control = setInterval(cronometer, 1000);
        btnStart.disabled = true;
        btnStop.disabled = false;
        btnReset.disabled = false;
    }

    btnStop.onclick = function(e){
        clearInterval(control);
        btnStop.disabled = true;
        btnStart.disabled = false;
    }

    btnReset.onclick =  function(e){
        clearInterval(control);
        hundredth = 0;
        second = 0;
        minute = 0;
        hour = 0;
        secondHtml.innerHTML = '00';
        minuteHtml.innerHTML ='00';
        hourHtml.innerHTML = '00';
        btnStart.disabled = false;
        btnStop.disabled = true;
        btnReset.disabled = true;
    }

    function cronometer() {
        if (second < 59) {
            second++;
            if (second < 10) { second = "0"+second; }
            secondHtml.innerHTML = second;
        }
        if (second == 59) {
            second = -1;
        }
        if ( (second == 0) ) {
            minute++;
            if (minute < 10) { minute = "0"+minute }
            minuteHtml.innerHTML = minute;
        }
        if (minute == 59) {
            minute = -1;
        }
        if ( (second == 0)&&(minute == 0) ) {
            hour ++;
            if (hour < 10) { hour = "0"+hour }
            hourHtml.innerHTML = hour;
        }
    }
//});
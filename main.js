var hr = document.querySelector('#hr');
var mn = document.querySelector('#mn');
var sc = document.querySelector('#sc');
var xx = document.querySelector('#xx');

setInterval( () => {
    var day = new Date();
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * 6;
    var ss = day.getSeconds() * 6;
    var xs = day.getMilliseconds();
        
    hr.style.transform = `rotateZ(${hh+mm/12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`; 
    xx.style.transform = `rotateZ(${xs}deg)`; 
});

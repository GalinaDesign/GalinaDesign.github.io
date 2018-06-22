function windChill () {
    var h = parseFloat(document.getElementById("high").value);
    var l = parseFloat(document.getElementById("low").value);
    var speed = parseFloat(document.getElementById("wind").value);
    var temp = (h+l)/2;
    var chill = windCh(temp, speed);
    
    document.getElementById("output").innerHTML = chill;
}
    
function windCh (t, s) {
    var f = 35.74+0.6215*t-35.75*(Math.pow(s,0.16))+0.4275*t*(Math.pow(s,0.16));
    return f;
    
}
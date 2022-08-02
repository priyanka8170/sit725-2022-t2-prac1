var button = document.querySelector('button') 
 button.onclick = function showTime()  
 { 
 document.getElementById('currentTime').innerHTML = new Date().toString(); 
 setInterval(function () { 
         showTime(); 
 }, 1000);}

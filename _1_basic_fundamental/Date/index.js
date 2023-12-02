//  date is a constructor we need to create the  object of the date 
// object have too many methods or we can say function 
const second   = document.getElementById('second');
const minutes = document.getElementById('minutes');
const hour = document.getElementById('hour');
const time = document.getElementById('time');
setInterval(() => {
const date = new Date();

time.innerHTML = date.toLocaleDateString();

  second.innerHTML = date.getSeconds();
  minutes.innerHTML = date.getMinutes();
  hour.innerHTML = date.getHours();

  
}, 1000);
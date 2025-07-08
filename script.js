const clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
//   clock.innerHTML = `<span>${date}</span>` //another option
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);

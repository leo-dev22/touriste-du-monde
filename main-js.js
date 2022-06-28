const header = document.querySelector("header");

function Horloge() {
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.form.pendule.value = hours + ":" + minutes + ":" + seconds;
  setTimeout("Horloge()", 1000);
}

//scroll event
window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 10) {
    header.style.background = "blue";
  } else {
    header.style.background = "initial";
  }
});

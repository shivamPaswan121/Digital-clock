function digitalClock() {
  let date = new Date();
  let hourse = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  document.getElementById("time").innerHTML = `${hourse}:${minutes}:${seconds}`;
}
setInterval(digitalClock, 1000);
digitalClock();

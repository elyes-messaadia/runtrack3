let textarea = document.getElementById("keylogger");

document.addEventListener("keypress", function (event) {
  let key = event.key;

  if (/[a-z]/i.test(key)) {
    if (document.activeElement === textarea) {
      textarea.value += key + key;
    } else {
      textarea.value += key;
    }
  }
});

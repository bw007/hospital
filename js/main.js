const URL = "http://95.130.227.52:3112";

function alertMessage(type, msg) {
  let notif = document.querySelector(".notif");

  if (!notif) {
    notif = document.createElement("div");
    notif.classList?.add("notif");
    document.body.append(notif);
  }

  notif.textContent = msg;
  notif.classList.add(type);

  setTimeout(() => {
    notif.classList.remove(type);
  }, 2000);
}

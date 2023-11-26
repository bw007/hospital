const URL = "http://95.130.227.52:3112";
let url = window.location.href.split("/").at(-1);

function alertMessage(type, msg) {
  let notif = document.querySelector(".notif");

  if (!notif) {
    notif = document.createElement("div");
    notif.classList.add("notif");
    document.body.append(notif);
  }

  notif.textContent = msg;
  notif.classList.add(type);

  setTimeout(() => {
    notif.classList.remove(type);
  }, 2000);
}

const checkUser = () => {
  if (["reg.html", "login.html"].includes(url)) return;

  if (localStorage.getItem("TOKEN") && localStorage.getItem("user")) {
    console.log(100);
  } else {
    window.location = "login.html";
  }
};
checkUser();

const menu = [
  {
    link: "/index.html",
    icon: "home.svg",
    text: "Bosh sahifa",
  },
  {
    link: "/department.html",
    icon: "department.svg",
    text: "Bo'limlar",
  },
];
const menuLinks = document.querySelector(".sidebar__links");
const menuSignOut = document.querySelector(".sidebar__footer");
menuLinks.innerHTML = "";

menu.forEach(({link, icon, text}) => {
  menuLinks?.innerHTML += `
    <a href="${link}" class="sidebar__link ${link.includes(url) ? "sidebar__link--active" : ""}">
      <img src="./assets/icons/${icon}" alt="">
      ${text}
    </a>
  `;
});

menuSignOut.innerHTML = "";
menuSignOut.innerHTML = `
  <a href="./login.html" class="sidebar__link">
    <img src="./assets/icons/logout.svg" alt="">
    Tizimdan chiqish
  </a>
`;

const logout = document.querySelector(".sidebar__footer a")

logout.onclick = () => {
  localStorage.clear();
}
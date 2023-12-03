const URL = "http://95.130.227.52:3112";
let url = window.location.href.split("/").at(-1);
const authUrls = ["login.html", "reg.html"]

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
  if (authUrls.includes(url)) return;

  if (localStorage.getItem("TOKEN") && localStorage.getItem("user")) {
    const token = localStorage.getItem("TOKEN");
    const user = localStorage.getItem("user");

    const check = new XMLHttpRequest();
    
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

const menuRender = () => {
  const menuLinks = document.querySelector(".sidebar__links");
  const menuSignOut = document.querySelector(".sidebar__footer");
  menuLinks.innerHTML = "";
  
  menu.forEach(({ link, icon, text }) => {
    menuLinks.innerHTML += `
      <a href="${link}" class="sidebar__link ${
      link.includes(url) ? "sidebar__link--active" : ""
    }">
        <img src="./assets/icons/${icon}" alt="">
        ${text}
      </a>
    `;
  });
  
  menuSignOut.innerHTML = "";
  menuSignOut.innerHTML = `
    <a href="/login.html" class="sidebar__link">
      <img src="./assets/icons/logout.svg" alt="">
      Tizimdan chiqish
    </a>
  `;
}

if (!authUrls.includes(url)) {
  menuRender()
  const logout = document.querySelector(".sidebar__footer a");

  logout.onclick = (e) => {
    e.preventDefault();
  
    localStorage.clear();
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  };
}

class Hospital {
  constructor(collection, header, data) {
    this.collection = collection
    this.header = header
    this.data = data
  }
  renderTable() {
    const wrapper = document.querySelector(".wrapper");
    
    const table = document.createElement("table");
    const tHead = document.createElement("thead");
    const tHeadTr = document.createElement("tr");
    const tHeadTh_N = document.createElement("th");
    tHeadTh_N.textContent = "N";
    tHeadTr.appendChild(tHeadTh_N);

    this.header.forEach(item => {
      if (item.table) {
        const tHeadTh = document.createElement("th");
        tHeadTh.textContent = item.title;
        tHeadTr.appendChild(tHeadTh);
      }
      
    });

    const tHeadTh_CreatedTime = document.createElement("th");
    tHeadTh_CreatedTime.textContent = "Yaratilgan vaqti";

    const tHeadTh_status = document.createElement("th");
    tHeadTh_status.textContent = "Holati";

    const tHeadTh_btns = document.createElement("th");
    
    tHeadTr.append(tHeadTh_CreatedTime, tHeadTh_status, tHeadTh_btns);
    tHead.appendChild(tHeadTr);
    table.appendChild(tHead);


    const tBody = document.createElement("tbody");

    this.data.forEach((item, index) => {
      const tr = document.createElement("tr");

      const indexTD = document.createElement("td");
      indexTD.textContent = index + 1;
      tr.appendChild(indexTD);


      this.header.forEach(head => {
        if (head.table) {
          const td = document.createElement("td");
          td.textContent = item[head.slug];
          tr.appendChild(td);
        }
      });

      const createdTimeTD = document.createElement("td");
      createdTimeTD.textContent = item.time;

      const statusTD = document.createElement("td");
      statusTD.textContent = item.status;

      const btns = document.createElement("td");
      btns.textContent = "Tugma";

      tr.append(createdTimeTD, statusTD, btns);
      tBody.appendChild(tr);
    });
    table.appendChild(tBody);

    wrapper.appendChild(table)    
  }
}
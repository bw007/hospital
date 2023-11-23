const form = document.querySelector(".form__holder");

if (form) {}

form.onsubmit = (e) => {
  e.preventDefault();

  let user = {};

  let data = new FormData(form);

  data.forEach((value, name) => {
    user[name] = value;
  });

  const xhr = new XMLHttpRequest();

  xhr.open("POST", `${URL}/auth/login`, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onload = () => {
    if (xhr.status == 200 && xhr.response) {
      alertMessage("success", "Muvaffaqiyatli!");
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      alertMessage("danger", xhr.response);
    }
  };
  xhr.send(JSON.stringify(user));
};

const form = document.querySelector(".form__holder");

if (form) {
}

const reg = (e) => {
  e.preventDefault();

  let user = {};

  let data = new FormData(form);

  data.forEach((value, name) => {
    user[name] = value;
  });

  fetch(`${URL}/auth/reg`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.text())
    .then((data) => {
      if (data === "success") {
        alertMessage(data, "Muvaffaqiyatli!");
        setTimeout(() => {
          window.location = "login.html";
        }, 1000);
      } else {
        alertMessage("danger", "Bunday foydalanuvchi mavjud!");
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

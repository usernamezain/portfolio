let shower = document.querySelector(".image-shower");
let closes = document.querySelector(".cancel");
let imageShown = document.querySelector(".image-show");

let projects = document.querySelectorAll(".project");

function openimage(srcurl) {
  shower.style.transform = "scale(1)";
  shower.style.opacity = 1;
  setTimeout(() => {
    imageShown.src = srcurl;
  }, 400);
}
closes.addEventListener("click", (e) => {
  shower.style.transform = "scale(0)";
  shower.style.opacity = 0;

  imageShown.src = "";
});

// email system

function linkupdate() {
  window.addEventListener("keydown", (e) => {
    let name = document.querySelector(".name").value;
    let gender = document.querySelector(".gender").value;
    let message = document.querySelector(".message").value;
    let updateLink = document.querySelector(".readylink");

    let messageupdate = message;
    const number = null; //numberherre

    updateLink.setAttribute(
      `href',"https://wa.me/${number}?text=My%20name%20is%20${name},%20I%20am%20${gender}%20and%20${messageupdate}"`
    );
  });
}

linkupdate();

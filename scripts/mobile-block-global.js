const manageMQ = (e) => {
  if (e.matches) {
    document.querySelector(".global-container").style.opacity = "0";
    document.querySelector(".global-container").style.zIndex = "-1";
    document.querySelector("#mobile-block").style.opacity = "0.9";
    document.querySelector("#mobile-block").style.zIndex = "0";
  } else {
    document.querySelector(".global-container").style.opacity = "1";
    document.querySelector(".global-container").style.zIndex = "0";
    document.querySelector("#mobile-block").style.opacity = "0";
    document.querySelector("#mobile-block").style.zIndex = "-1";
  }
};

const checkMQ = () => {
  const mqlGlobal = window.matchMedia("(max-width: 540px)");
  mqlGlobal.onchange = (e) => manageMQ(e);
  document.addEventListener("DOMContentLoaded", manageMQ(mqlGlobal));
};

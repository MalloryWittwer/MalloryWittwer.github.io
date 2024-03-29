const manageMQ = (e) => {
  if (e.matches) {
    document.querySelector("#home-nav").style.opacity = "0";
    document.querySelector("#home-nav").style.zIndex = "-1";
    document.querySelector("#mobile-block").style.opacity = "0.9";
    document.querySelector("#mobile-block").style.zIndex = "0";
    console.log("made paragraph visible");
  } else {
    document.querySelector("#home-nav").style.opacity = "1";
    document.querySelector("#home-nav").style.zIndex = "0";
    document.querySelector("#mobile-block").style.opacity = "0";
    document.querySelector("#mobile-block").style.zIndex = "-1";
    console.log("made header visible");
  }
};

const checkMQ = () => {
  const mqlGlobal = window.matchMedia("(max-width: 540px)");
  mqlGlobal.onchange = (e) => manageMQ(e);
  document.addEventListener("DOMContentLoaded", manageMQ(mqlGlobal));
};

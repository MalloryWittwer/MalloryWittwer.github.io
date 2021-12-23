const manageMQ540 = (e) => {
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

const openNav = () => {
  document.getElementById("mySidebar").style.opacity = "0.9";
  document.getElementById("sidebar-btn").style.opacity = "0";
  document.getElementById("mySidebar").style.zIndex = "100";
  document.getElementById("sidebar-btn").style.zIndex = "-1";
};

const closeNav = () => {
  document.getElementById("mySidebar").style.opacity = "0";
  document.getElementById("sidebar-btn").style.opacity = "0.9";
  document.getElementById("mySidebar").style.zIndex = "-1";
  document.getElementById("sidebar-btn").style.zIndex = "100";
};

const closeNavDisplay = () => {
  document.getElementById("mwittwer").style.display = "none";
  document.getElementById("closenav").style.display = "block";
  closeNav();
};

const openNavDisplay = () => {
  document.getElementById("mwittwer").style.display = "block";
  document.getElementById("closenav").style.display = "none";
  openNav();
};

const manageMQ768 = (e) => {
  if (e.matches) {
    closeNavDisplay();
  } else {
    openNavDisplay();
  }
};

const checkMQ = () => {
  const mql540 = window.matchMedia("(max-width: 540px)");
  mql540.onchange = (e) => manageMQ540(e);
  document.addEventListener("DOMContentLoaded", manageMQ540(mql540));

  const mql768 = window.matchMedia("(max-width: 768px)");
  mql768.onchange = (e) => manageMQ768(e);
  document.addEventListener("DOMContentLoaded", manageMQ768(mql768));
};

const openNav = () => {
  document.getElementById("mySidebar").style.opacity = "0.9";
  document.getElementById("sidebar-btn").style.opacity = "0";
  document.getElementById("mySidebar").style.zIndex = "100";
  document.getElementById("sidebar-btn").style.zIndex = "-1";
}

const closeNav = () => {
  document.getElementById("mySidebar").style.opacity = "0";
  document.getElementById("sidebar-btn").style.opacity = "0.9";
  document.getElementById("mySidebar").style.zIndex = "-1";
  document.getElementById("sidebar-btn").style.zIndex = "100";
}

const closeNavDisplay = () => {
  document.getElementById("mwittwer").style.display = "none";
  document.getElementById("closenav").style.display = "block";
  closeNav();
}

const openNavDisplay = () => {
  document.getElementById("mwittwer").style.display = "block";
  document.getElementById("closenav").style.display = "none";
  openNav();
}

const mql = window.matchMedia("(max-width: 768px)");

mql.onchange = (e) => {
  if (e.matches) {
    console.log('closing');
    closeNavDisplay();
  } else {
    console.log('opening');
    openNavDisplay();
  }
};
function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("sidebar-btn").setAttribute('onclick', 'closeNav()');
  document.getElementById("sidebar-btn").innerHTML = '<i class="fas fa-chevron-left"></i>'
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("sidebar-btn").setAttribute('onclick', 'openNav()');
  document.getElementById("sidebar-btn").innerHTML = '&#9776;';
}

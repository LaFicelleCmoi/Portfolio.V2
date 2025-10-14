document.addEventListener('DOMContentLoaded', function() {
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;
});

function openNav() {
  (document.getElementById("mySidenav")).classList.add("active");
}


function closeNav() {
  (document.getElementById("mySidenav")).classList.remove("active");
}
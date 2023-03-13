const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

let menuOpen = false;

function openMenu() {
  if (!menuOpen) {
    menuOpen = true;
    overlay.style.display = "block";
    sidebar.style.display = "block";
    sidebar.style.width = "250px";
  }
}

function closeMenu() {
  if (menuOpen) {
    menuOpen = false;
    overlay.style.display = 'none';
    sidebar.style.width = '0px';
  }
}

hamburger.addEventListener('click', function() {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

overlay.addEventListener('click', function() {
  if (menuOpen) {
    closeMenu();
  }
});

document.addEventListener('click', function(event) {
  const isClickInside = sidebar.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside && menuOpen) {
    closeMenu();
  }
});

window.addEventListener('load', function() {
  closeMenu();
});

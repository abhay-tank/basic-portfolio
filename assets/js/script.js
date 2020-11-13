window.onload = () => {
  if (window.location.hash) {
    urlFound = window.location.hash;
    activateItem = urlFound.slice(1, urlFound.length);
    activateItem = activateItem + "-link";
    activateItem = document.getElementById(activateItem);
  } else {
    navItems = document.getElementsByClassName("nav-link");
    activateItem = navItems[0];
  }
  activateItem.style.backgroundColor = "white";
  activateItem.style.opacity = 1;
  activateItem.style.filter = "grayscale(0%)";
};

activateNavItem = (item) => {
  navItems = document.getElementsByClassName("nav-link");
  Array.from(navItems).forEach((element) => {
    element.style.backgroundColor = "#161616";
  });
  activateItem = document.getElementById(item);
  activateItem.style.backgroundColor = "white";
  document.getElementById(item).style.opacity = 1;
  document.getElementById(item).style.filter = "grayscale(0%)";
};

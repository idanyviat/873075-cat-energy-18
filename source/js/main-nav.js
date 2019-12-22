  var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toggle");
  var navSiteList = document.querySelector(".site-list")

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
    navSiteList.classList.remove("site-list")
    navSiteList.classList.add("site-list--out")
    } else {
      navSiteList.classList.add("site-list");
      navSiteList.classList.remove("site-list--out");
    }
  });

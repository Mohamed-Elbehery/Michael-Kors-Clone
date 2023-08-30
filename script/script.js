$(document).ready(() => {
  //! Variables
  const topHeaderHeight = document.querySelector(".top-header").clientHeight;
  const header = document.querySelector("header");
  const headerLogo = document.querySelector("header h1");
  const vodsLinks = document.querySelectorAll(".hero ul li button");
  const vods = document.querySelectorAll(".hero iframe");
  const trendingLinks = document.querySelectorAll(".trending-now ul li button");
  const categories = document.querySelectorAll(
    ".trending-now .trending-content .cats .cat"
  );
  const xMark = document.querySelector(".x-mark");
  const menuIcon = document.querySelector(".menu-icon");

  //! Functions
  //TODO On Load
  vods.forEach((vod) => {
    if (vod.classList.value == "spring") {
      $(vod).fadeIn();
    } else {
      $(vod).fadeOut();
    }
  });

  categories.forEach((category) => {
    if (category.getAttribute("category") == "astor & yvonne") {
      $(category).fadeIn();
    } else {
      $(category).hide();
    }
  });

  const changeActiveClass = (event, links) => {
    links.forEach((link) => {
      link.classList = "";
    });
    event.target.classList.add("active");
  };

  const headerAnimation = () => {
    if (window.pageYOffset > topHeaderHeight) {
      header.style.top = 0;
      header.style.height = "151px";
      headerLogo.style.fontSize = "25px";
    } else {
      header.style.top = `${topHeaderHeight}px`;
      header.style.height = "167px";
      headerLogo.style.fontSize = "40px";
    }
  };

  //! Event Listeners
  vodsLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      changeActiveClass(e, vodsLinks);
      let activeLink = e.target.innerText.toLowerCase();

      vods.forEach((vod) => {
        if (vod.classList.value == activeLink) {
          $(vod).fadeIn();
        } else {
          $(vod).fadeOut();
        }
      });
    });
  });

  trendingLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      changeActiveClass(e, trendingLinks);
      let activeLink = e.target.innerText.toLowerCase();

      categories.forEach((category) => {
        if (category.getAttribute("category") == activeLink) {
          $(category).fadeIn();
        } else {
          $(category).hide();
        }
      });
    });
  });

  xMark.addEventListener("click", () => {
    $("header nav .mobile-nav").css("clip-path", "circle(0)");
    $(document.body).css("height", "auto");
    $(document.body).css("overflow", "auto");
  });

  menuIcon.addEventListener("click", () => {
    $("header nav .mobile-nav").css("clip-path", "circle(1000px)");
    $(document.body).css("height", "100vh");
    $(document.body).css("overflow", "hidden");
  });

  window.addEventListener("scroll", headerAnimation);
});

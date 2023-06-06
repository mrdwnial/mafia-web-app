const $ = document;

// let navbarLogo = $.querySelector("nav img");
// console.log(navbarLogo);
// $.body.addEventListener("scroll", function (e) {
//   if (this.scrollTop !== 0) {
//     // console.log();
//     navbarLogo.width = "50";
//     navbarLogo.height = "50";
//   } else{
//     navbarLogo.width = "60";
//     navbarLogo.height = "60";
//   }
// });

function toggleMobileMenu() {
  $.body.classList.toggle("disable-scroll");
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

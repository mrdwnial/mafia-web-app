const $ = document;

const loaderContainer = $.querySelector(".loader")

window.addEventListener("load", function(){
  this.setTimeout(function(){
    loaderContainer.classList.add("d-none")
  }, 1000)
})


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

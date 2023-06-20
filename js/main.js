// base variables
const $ = document;
const homeSection = $.querySelector(".home-section");
const GameTermsSection = $.querySelector(".gameTerms-section");
const GameScenariosSection = $.querySelector(".gameScenarios-section");
const GameEducationSection = $.querySelector(".gameEducation-section");
const AboutUsSection = $.querySelector(".aboutUs-section");

// loader
const loaderContainer = $.querySelector(".loader");
loaderContainer.classList.remove("d-none");

function loaderHandler() {
  loaderContainer.classList.remove("d-none");
  setTimeout(function () {
    loaderContainer.classList.add("hideLoader");
    setTimeout(function () {
      loaderContainer.classList.add("d-none");
      loaderContainer.classList.remove("hideLoader");
    }, 200);
  }, 1000);
}

// mobile sidebar disable scroll function
function toggleMobileMenu() {
  $.body.classList.toggle("disable-scroll");
}

let getLastPageName = localStorage.getItem("lastPage");
if (!getLastPageName) {
  localStorage.setItem("lastPage", "HomePage");
  getLastPageName = "HomePage";
}

window.addEventListener("load", function () {
  loaderHandler();
  CloseAllPages();

  let lastPageFunctionName = window[getLastPageName];
  if (typeof lastPageFunctionName === "function") lastPageFunctionName();
});

// initial steps of changing the page function
function initialChangingPage(pageName) {
  localStorage.setItem("lastPage", pageName);
  loaderHandler();
  CloseAllPages();
}

function HomePage() {
  initialChangingPage("HomePage");
  homeSection.classList.remove("d-none");
}

function GameTermsPage() {
  initialChangingPage("GameTermsPage");
  GameTermsSection.classList.remove("d-none");
}

function GameScenariosPage() {
  initialChangingPage("GameScenariosPage");
  GameScenariosSection.classList.remove("d-none");
}

function GameEducationPage() {
  initialChangingPage("GameEducationPage");
  GameEducationSection.classList.remove("d-none");
}

function AboutUsPage() {
  initialChangingPage("AboutUsPage");
  AboutUsSection.classList.remove("d-none");
}

function CloseAllPages() {
  $.body.classList.remove("disable-scroll");
  $.body.scrollTo(0, 0);
  homeSection.classList.add("d-none");
  GameTermsSection.classList.add("d-none");
  GameScenariosSection.classList.add("d-none");
  GameEducationSection.classList.add("d-none");
  AboutUsSection.classList.add("d-none");
}

let moreScenariosDetailText = $.querySelectorAll(".more-details-text");

moreScenariosDetailText.forEach(function (moreText) {
  moreText.addEventListener("click", function (label) {
    let textElement = label.target;
    let scenarioDetailElement = textElement.parentElement.parentElement;
    let thisScenarioId = scenarioDetailElement.parentElement.id;

    textElement.classList.toggle("show-text");
    let isShowDetails = textElement.classList.contains("show-text");

    if (!isShowDetails) {
      scenarioDetailElement.style.height = "10em";
      textElement.innerHTML = "توضیحات بیشتر...";
      textElement.setAttribute("href", `#${thisScenarioId}`);
      textElement.setAttribute("target", "_self");
    } else {
      scenarioDetailElement.style.height = "auto";
      textElement.innerHTML = "توضیحات کمتر...";
      textElement.removeAttribute("href");
      textElement.removeAttribute("target");
    }
  });
});

// swipe library code
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

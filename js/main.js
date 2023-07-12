// base variables
const $ = document;
const homeSection = $.querySelector(".home-section");
const GameTermsSection = $.querySelector(".gameTerms-section");
const GameScenariosSection = $.querySelector(".gameScenarios-section");
const GameEducationSection = $.querySelector(".gameEducation-section");
const AboutUsSection = $.querySelector(".aboutUs-section");

// loader
const loaderContainer = $.querySelector(".loader");
// loaderContainer.classList.remove("d-none");

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

// Scroll up button
let scrollUpBtn = $.querySelector(".scroll-up-btn")
function scrollUpHandler(){
  $.body.scrollTop = 0
}


// local storage section for last page opened
let getLastPageName = localStorage.getItem("lastPage");
if (!getLastPageName) {
  localStorage.setItem("lastPage", "HomePage");
  getLastPageName = "HomePage";
}

window.addEventListener("load", function () {
  loaderHandler();
  CloseAllPages();
  // if(window.location.pathname === "/index.html"){
  // }

  let lastPageFunctionName = window[getLastPageName];
  if (typeof lastPageFunctionName === "function") lastPageFunctionName();
});

// initial steps of changing the page function
function initialChangingPage(pageName) {
  localStorage.setItem("lastPage", pageName);
  loaderHandler();
  CloseAllPages();
}

// pages functions

function HomePage() {
  initialChangingPage("HomePage");
  homeSection.classList.remove("d-none");
}

function GameTermsPage() {
  initialChangingPage("GameTermsPage");
  GameTermsSection.classList.remove("d-none");
}

function GameScenariosPage(scenarioName,isNavigateInPage) {
  // If you want to move, use this page => isNavigateInPage = true
  if(!isNavigateInPage){
    initialChangingPage("GameScenariosPage");
    GameScenariosSection.classList.remove("d-none");
    if (scenarioName) {
      window.location.hash = "#" + scenarioName;
      document.getElementById(scenarioName).scrollIntoView({ behavior: "smooth" });
    }
  } else {
    document.getElementById(scenarioName).scrollIntoView({ behavior: "smooth" });
  }
}

function GameEducationPage() {
  initialChangingPage("GameEducationPage");
  GameEducationSection.classList.remove("d-none");
}

function AboutUsPage() {
  initialChangingPage("AboutUsPage");
  AboutUsSection.classList.remove("d-none");
}

// close all pages function
function CloseAllPages() {
  $.body.classList.remove("disable-scroll");
  $.body.scrollTo(0, 0);
  homeSection.classList.add("d-none");
  GameTermsSection.classList.add("d-none");
  GameScenariosSection.classList.add("d-none");
  GameEducationSection.classList.add("d-none");
  AboutUsSection.classList.add("d-none");
}

// show and hide more details text section
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
      document.getElementById(thisScenarioId).scrollIntoView({ behavior: "smooth" });
    } else {
      scenarioDetailElement.style.height = "auto";
      textElement.innerHTML = "توضیحات کمتر...";
    }
  });
});

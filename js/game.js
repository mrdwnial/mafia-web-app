const gameScenariosDetail = [
  {
    scenarioName: "shabHayeMafia",
    persianName: "سناریو شب های مافیا",
    numbers: 9,
    city: ["کارآگاه", "پزشک", "حرفه ای", "جان سخت", "شهردار", "فروشنده", "روانپزشک", "خوابگرد", "شهروند"],
    mafia: ["پدرخوانده", "دکتر لکتر", "جوکر", "مافیا ساده"],
    lastMoveCards: ["مسیر سبز", "فرش قرمز", "ذهن زیبا", "بی خوابی", "سرگیجه", "شلیک نهایی"],
  },
  {
    scenarioName: "godfather",
    persianName: "سناریو پدرخوانده",
    numbers: 11,
    city: ["دکتر واتسون", "لئون حرفه ای", "همشهری کین", "کنستانتین", "شهروند"],
    mafia: ["پدرخوانده", "ساول گودمن", "ماتادور"],
    independent: ["نوستراداموس"],
    lastMoveCards: ["سکوت بره ها", "افشای هویت", "ذهن زیبا", "دستبند", "تغییر چهره"],
  },
  {
    scenarioName: "bazpors",
    persianName: "سناریو بازپرس",
    numbers: 10,
    city: ["کارآگاه", "پزشک", "محقق", "رویین‌تن", "بازپرس", "اسنایپر", "شهروند"],
    mafia: ["رییس", "مافیا", "ناتو", "شیاد", " مافیا ساده"],
  },
  {
    scenarioName: "takavar",
    persianName: "سناریو تکاور شبکه سلامت",
    numbers: 10,
    city: ["کارآگاه", "پزشک", "تکاور", "نگهبان", "تفنگدار", "شهروند"],
    mafia: ["رییس مافیا", "ناتو", "گروگانگیر"],
  },
  {
    scenarioName: "mozakere",
    persianName: "سناریو مذاکره کننده شبکه سلامت",
    numbers: 9,
    city: ["کارآگاه", "پزشک", "اسنایپر", "زره‌پوش", "خبرنگار", "شهروند"],
    mafia: ["رییس مافیا", "مذاکره‌ کننده", "مافیا ساده"],
  },
  {
    scenarioName: "saghi",
    persianName: "سناریو ساقی",
    numbers: 9,
    city: ["کارآگاه", "پزشک", "فدایی", "ساقی", "تفنگساز", "قاضی", "رئیس پلیس", "خوابگرد", "شهروند"],
    mafia: ["رییس مافیا", "تروریست", "شاه کش", "مافیا ساده"],
  },
  {
    scenarioName: "natasha",
    persianName: "سناریو ناتاشا",
    numbers: 9,
    city: ["کارآگاه", "پزشک", "اسنایپر", "رویین‌تن", "فراماسون", "کشیش", "تفنگدار", "کابوی", "قاضی", "فرمانده", "شهروند"],
    mafia: ["رییس مافیا", "ناتاشا", "ناتو", "خرابکار", "تروریست"],
  },
  {
    scenarioName: "ravani",
    persianName: "سناریو روانی",
    numbers: 9,
    city: ["پزشک", "روانشناس", "تفنگدار", "شهروند ساده"],
    mafia: ["رییس مافیا", "روانی", "خرابکار"],
  },
  {
    scenarioName: "killer",
    persianName: "سناریو کیلر",
    numbers: 13,
    city: ["کارآگاه", "پزشک", "اسنایپر", "رویین‌تن", "فراماسون", "ردگیر", "تفنگدار", "کابوی", "آهنگر", "قاضی", "فرمانده"],
    mafia: ["رییس مافیا", "کارآگاه خصوصی", "ناتو", "جراح", "تروریست"],
    independent: ["کیلر"],
  },
  {
    scenarioName: "joker",
    persianName: "سناریو جوکر",
    numbers: 12,
    city: ["کارآگاه", "پزشک", "اسنایپر", "رویین‌تن", "کشیش", "فراماسون", "تفنگدار", "کابوی", "قاضی", "فرمانده"],
    mafia: ["رییس مافیا", "ناتاشا", "ناتو", "تروریست"],
    independent: ["جوکر"],
  },
  {
    scenarioName: "gambler",
    persianName: "سناریو گمبلر ",
    numbers: 18,
    city: ["عینک‌ ساز", "پزشک", "روانشناس", "رویین‌تن", "فراماسون", "ردگیر", "تفنگدار", "کابوی", "آهنگر", "عنکبوت", "قاضی"],
    mafia: ["رییس مافیا", "کارآگاه خصوصی", "ناتو", "جراح", "تروریست"],
    independent: ["گمبلر", "کیلر"],
  },
  {
    scenarioName: "roosi",
    persianName: "سناریو مافیا روسی",
    numbers: 5,
    city: ["شهروند"],
    mafia: ["مافیا ساده"],
  },
  {
    scenarioName: "shabmMafia",
    persianName: "سناریو شب مافیا",
    numbers: 9,
    city: ["کارآگاه", "پزشک", "شهردار", "کلانتر", "قاضی", "دست‌کج", "گورکن", "گردن‌کلفت", "دندان‌پزشک"],
    mafia: ["رییس مافیا", "معشوقه", "شاهکش", "جلب", "جراح", "شارلاتان"],
  },
  {
    scenarioName: "vestern",
    persianName: "سناریو وسترن",
    numbers: 5,
    city: ["کابوی", "اسنایپر", "تفنگدار", "فراماسون", "زره‌پوش", "شهروند"],
    mafia: ["شاهکش", "تروریست"],
  },
  {
    scenarioName: "ghomarBaz",
    persianName: "سناریو قمارباز",
    numbers: 5,
    city: ["روانشناس", "عینک‌ساز", "آهنگر", "عنکبوت", "فراماسون", "کابوی", "شهروند"],
    mafia: ["قمارباز", "معشوقه", "جاسوس", "شاهکش", "تروریست"],
  },
  {
    scenarioName: "godFatherShow",
    persianName: "سناریو گادفادرشو",
    numbers: 7,
    city: ["ساقی", "کارآگاه", "پزشک", "اسنایپر", "جان سخت", "شهروند"],
    mafia: ["پدرخوانده", "دکتر", "لکتر", "ناتو", "مافیا ساده"],
  },
  {
    scenarioName: "hillerKiller",
    persianName: "سناریو هیلر کیلر",
    numbers: 6,
    city: ["کارآگاه", "پزشک", "شهروند ساده"],
    mafia: ["رییس مافیا", "مافیا ساده"],
  },
  {
    scenarioName: "khaen",
    persianName: "سناریو شهروند خائن",
    numbers: 6,
    city: ["کارآگاه", "پزشک", "شهروند خائن", "شهروند ساده"],
    mafia: ["رییس مافیا"],
  },
];
let playersNameArray = [];

// start game pages container variable
let playersListSection = $.querySelector(".players-list-section");
let selectScenarioSection = $.querySelector(".select-scenario-section");
let selectRolesSection = $.querySelector(".select-roles-section");
let playRoleContainer = $.querySelector(".play-role-container");

// players list section variable
let addPlayerNameInput = $.getElementById("addPlayerInput");
let addPlayerNameBtn = $.getElementById("addPlayerBtn");
let playersListContainer = $.getElementById("playersListContainer");
let startGameBtn = $.getElementById("startGameBtn");

// select scenario section variable
let scenarioListContainer = $.querySelector(".scenarios-list-container ul");

// select roles section variable
let rolesListContainer = $.querySelector(".roles-list-container");
let cityRolesContainer = $.querySelector(".city-roles-container");
let mafiaRolesContainer = $.querySelector(".mafia-roles-container");
let IndependentRolesContainer = $.querySelector(".Independent-roles-container");

let lastPlayersName = JSON.parse(localStorage.getItem("playersName"));

if (lastPlayersName !== null) {
  playersNameArray = lastPlayersName;
  playersNameArray.forEach(function (player) {
    addPlayerNameHandler(player.name);
  });
}

function addPlayerNameHandler(playerNameInput) {
  if (playerNameInput) {
    playersListContainer.innerHTML = "";
    addPlayerNameInput.parentElement.classList.remove("check-input");

    let submitNameCheck = playersNameArray.every(function (player) {
      return player.name !== playerNameInput;
    });

    if (submitNameCheck) {
      playersNameArray.push({ name: playerNameInput });
      localStorage.setItem("playersName", JSON.stringify(playersNameArray));
    }

    playersNameArray.forEach(function (player) {
      playersListContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="col-10 p-2 my-1 players-list-item">
            <p class="col-10 players-list-item-text">${player.name}</p>
            <img onclick="removePlayerFromList(this)" src="./assets/image/Game Page/red-remove-square.svg" class="col-2" alt="red-remove-square" />
        </div>
        `
      );
    });
  } else {
    addPlayerNameInput.parentElement.classList.add("check-input");
    addPlayerNameInput.focus();
  }
}

function removePlayerFromList(removeElement) {
  let removePlayerName = removeElement.parentElement.firstElementChild.innerHTML;

  removeElement.parentElement.remove();

  playersNameArray.forEach(function (player) {
    if (player.name == removePlayerName) {
      let removeItemIndex = playersNameArray.findIndex(function (playerObject) {
        return playerObject === player;
      });
      playersNameArray.splice(removeItemIndex, 1);
      localStorage.setItem("playersName", JSON.stringify(playersNameArray));
    }
  });

  if (playersNameArray.length === 0) {
    playersListContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-10 p-3 my-1 empty-item-text">
        <p class="col-10">نام بازیکنان را وارد نمایید !</p>
      </div>
      `
    );
  }
}

function submitPlayersName() {
  if (playersNameArray.length >= 5) {
    loaderHandler();
    scrollUpHandler();
    addPlayerNameInput.parentElement.classList.remove("check-input");
    playersListSection.classList.add("d-none");
    selectScenarioSection.classList.remove("d-none");

    localStorage.setItem("playersName", JSON.stringify(playersNameArray));

    gameScenariosDetail.forEach(function (scenario) {
      if (scenario.numbers <= playersNameArray.length) {
        scenarioListContainer.insertAdjacentHTML(
          "beforeend",
          `
          <li class="scenario-name">
            <span id="${scenario.scenarioName}">${scenario.persianName}</span>
          </li>
          `
        );
      }
    });
  } else {
    addPlayerNameInput.parentElement.classList.add("check-input");
  }
  addPlayerNameInput.focus();
}

addPlayerNameBtn.addEventListener("click", function () {
  addPlayerNameHandler(addPlayerNameInput.value);
});

startGameBtn.addEventListener("click", submitPlayersName);

scenarioListContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    showSelectRolesPage(event.target.id);
  }
});

function showSelectRolesPage(scenarioName) {
  loaderHandler();
  scrollUpHandler();

  selectScenarioSection.classList.add("d-none");
  selectRolesSection.classList.remove("d-none");

  let scenarioFuncName = window[scenarioName];
  if (typeof scenarioFuncName === "function") scenarioFuncName(playersNameArray.length);
}

// function shabHayeMafia(playersNumber){
//   showSelectRolesPage("shabHayeMafia")
// }
// function godfather(playersNumber){
//   showSelectRolesPage("godfather")
// }
// function bazpors(playersNumber){
//   showSelectRolesPage("bazpors")
// }
// function takavar(playersNumber){
//   showSelectRolesPage("takavar")
// }
// function mozakere(playersNumber){
//   showSelectRolesPage("mozakere")
// }
// function saghi(playersNumber){
//   showSelectRolesPage("saghi")
// }
// function natasha(playersNumber){
//   showSelectRolesPage("natasha")
// }
// function ravani(playersNumber){
//   showSelectRolesPage("ravani")
// }
// function killer(playersNumber){
//   showSelectRolesPage("killer")
// }
// function joker(playersNumber){
//   showSelectRolesPage("joker")
// }
// function gambler(playersNumber){
//   showSelectRolesPage("gambler")
// }
function roosi(playersNumber) {
  // rolesListContainer;
  cityRolesContainer.innerHTML = "";
  mafiaRolesContainer.innerHTML = "";
  IndependentRolesContainer.innerHTML = "";

  for (var i = 1; i < playersNumber; i++) {
    cityRolesContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="col-4 p-1 role-item">
        <span class="col-12 p-3">شهروند</span>
      </div>
      `
    );
  }

  if (playersNumber % 2 === 0) {
    console.log(playersNumber / 2);
  } else {
    console.log(Math.trunc(playersNumber / 2));
  }
}
// function shabmMafia(playersNumber){
//   showSelectRolesPage("shabmMafia")
// }
// function vestern(playersNumber){
//   showSelectRolesPage("vestern")
// }
// function ghomarBaz(playersNumber){
//   showSelectRolesPage("ghomarBaz")
// }
// function godFatherShow(playersNumber){
//   showSelectRolesPage("godFatherShow")
// }
// function hillerKiller(playersNumber){
//   showSelectRolesPage("hillerKiller")
// }
// function khaen(playersNumber){
//   showSelectRolesPage("khaen")
// }

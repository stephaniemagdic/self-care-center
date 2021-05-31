/*---------Query Selectors and global variables ---------------*/
var currentMessage;
var favoriteMessages = [];
var form = document.querySelector('form');
var radio = form.elements['message-type'];
var submit = document.getElementById("submit")
var displayMessageSection = document.querySelector(".display-message");
var homePageSection = document.querySelector(".main-page")
var favoritesPage = document.querySelector(".favorites-page")
var viewFavoriteMessagesButton = document.querySelector(".view-saved");
var homeButton = document.querySelector(".home-button");
var messagesGrid = document.querySelector(".saved-messages-grid");
var displayMessageArticle = document.querySelector(".display-message");


/*---------Event Listeners ---------------*/
window.addEventListener("load", syncFavoriteMessages);
submit.addEventListener("click", displayMessage);
viewFavoriteMessagesButton.addEventListener("click", showFavorites);
homeButton.addEventListener("click", showHomePage);
favoritesPage.addEventListener("click", function(event) {
  deleteFavoriteMessage(event);
});

displayMessageArticle.addEventListener("click", function(e) {
  if (e.target.nodeName === "BUTTON") {
    favoriteAMessage()
  }
});


/*---------Functions ---------------*/
function syncFavoriteMessages () {
  var localStorageFavorites = JSON.parse(localStorage.getItem("favorites"));
  if (localStorageFavorites) {
    favoriteMessages = localStorageFavorites;
  }
}

function displayMessage() {
  event.preventDefault();
  if (radio.value === 'affirmation') {
    currentMessage = affirmations[getRandomIndex(affirmations)];
  } else if (radio.value === 'mantra') {
    currentMessage = mantras[getRandomIndex(mantras)];
  } else {
    return;
  }

  renderCurrentMessage();
}

function renderCurrentMessage(){
  displayMessageSection.innerHTML =
  `
  <p>${currentMessage}</p>
  <button class="favorite" alt="favorite-button">&#128153;</button>
  `
}

function favoriteAMessage() {
  var match = false;
  if (
    !favoriteMessages.length
    || !localStorage
    || localStorage.favorites === "[]"
  ) {
    favoriteMessages.push(new Message(currentMessage));
  } else {
    for (var i = 0; i < favoriteMessages.length; i ++) {
      if (`${favoriteMessages[i].messageText}` === `${currentMessage}`) {
        match = true;
      }
    }

    if (!match) {
      favoriteMessages.push(new Message(currentMessage));
    }
  }

  updateLocalStorage();
}

function renderFavorites() {
  if (localStorage) {
    getLocalStorage()
  };

  messagesGrid.innerHTML = '';
  for (var i = 0; i < favoriteMessages.length; i++) {
    messagesGrid.innerHTML +=
    `
    <section class="message-box" id="${favoriteMessages[i].id}">
      <p class="favorite-message-paragraph">${favoriteMessages[i].messageText}<p>
      <button class="delete-button">Delete</button>
    </section>
      `
    }
}

function showFavorites() {
  homePageSection.classList.add('hidden');
  favoritesPage.classList.remove('hidden');
  renderFavorites();
}

function showHomePage(){
  homePageSection.classList.remove('hidden');
  favoritesPage.classList.add('hidden');
}

function deleteFavoriteMessage(e) {
for (var i = 0; i < favoriteMessages.length; i++) {
    if (`${e.target.closest('section').id}` === `${favoriteMessages[i].id}`) {
      favoriteMessages.splice(i, 1);
    }
  }

  updateLocalStorage();
  renderFavorites();
}

function updateLocalStorage(){
  var favoritesList = JSON.stringify(favoriteMessages);
  localStorage.setItem("favorites", favoritesList);
  if (localStorage) {
    if (localStorage.favorites === "[]"
      || localStorage.favorites === []
      || favoriteMessages === []) {
         localStorage.clear();
    }
  }
}

function getLocalStorage() {
  var parsedList = JSON.parse(localStorage.getItem("favorites"));
  if (!parsedList) {
    localStorage.clear();
    favoriteMessages = [];
  } else {
    favoriteMessages = parsedList;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

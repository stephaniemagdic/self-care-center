/*---------Query Selectors and global variables ---------------*/
let favoriteMessages = [];
let currentMessage;
const form = document.querySelector('form');
const radio = form.elements['message-type'];
const submit = document.getElementById("submit")
const displayMessageSection = document.querySelector('.display-message');
const homePageSection = document.querySelector('.main-page')
const favoritesPage = document.querySelector('.favorites-page')
const viewFavoriteMessagesButton = document.querySelector('.view-saved');
const messagesGrid = document.querySelector('.saved-messages-grid');
const displayMessageArticle = document.querySelector('.display-message');

/*---------Event Listeners ---------------*/
window.addEventListener('load', () => syncFavoriteMessages());
submit.addEventListener('click', () => displayMessage());
viewFavoriteMessagesButton.addEventListener('click', () => showFavorites());
favoritesPage.addEventListener('click', (e) => {
  if (e.target.classList.contains('home-button')) {
    showHomePage()};
});
favoritesPage.addEventListener('click', (event) => {
  if (event.target.id === "delete") {
    deleteFavoriteMessage(event);
  }
});

displayMessageArticle.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON') {
    favoriteAMessage()
  }
});

/*---------Functions ---------------*/

const syncFavoriteMessages = () => {
  const localStorageFavorites = JSON.parse(localStorage.getItem('favorites'));
  if (localStorageFavorites) {
    favoriteMessages = localStorageFavorites;
  }
}

const displayMessage = () => {
  if (radio.value === 'affirmation') {
    currentMessage = affirmations[getRandomIndex(affirmations)];
  } else if (radio.value === 'mantra') {
    currentMessage = mantras[getRandomIndex(mantras)];
  } else {
    return;
  }

  renderCurrentMessage();
}

const renderCurrentMessage = () => {
  displayMessageSection.innerHTML =
  `
  <p>${currentMessage}</p>
  <button class="favorite" alt="favorite-button">&#128153;</button>
  `
}

const favoriteAMessage = () => {
  let match = false;
  for (let i = 0; i < favoriteMessages.length; i ++) {
    if (`${favoriteMessages[i].messageText}` === `${currentMessage}`) {
      match = true;
    }
  }
  
  if (!match) {
    favoriteMessages.push(new Message(currentMessage));
  }

  updateLocalStorage();
}

const renderFavorites = () => {
  if (localStorage) {
    getLocalStorage()
  };

  messagesGrid.innerHTML = '';
  for (let i = 0; i < favoriteMessages.length; i++) {
    messagesGrid.innerHTML +=
    `
    <section class="message-box" id="${favoriteMessages[i].id}">
      <p class="favorite-message-paragraph">${favoriteMessages[i].messageText}<p>
      <button class="delete-button" id="delete">Delete</button>
    </section>
      `
  }
}

const showFavorites = () => {
  homePageSection.classList.add('hidden');
  favoritesPage.classList.remove('hidden');
  renderFavorites();
}

const showHomePage = () => {
  homePageSection.classList.remove('hidden');
  favoritesPage.classList.add('hidden');
}

const deleteFavoriteMessage = (e) => {
  for (let i = 0; i < favoriteMessages.length; i++) {
    if (`${e.target.closest('section').id}` === `${favoriteMessages[i].id}`) {
      favoriteMessages.splice(i, 1);
    }
  }
  updateLocalStorage();
  renderFavorites();
}

const updateLocalStorage = () => {
  const favoritesList = JSON.stringify(favoriteMessages);
  localStorage.setItem("favorites", favoritesList);
}

const getLocalStorage = () => {
  const parsedList = JSON.parse(localStorage.getItem("favorites"));
  if (!parsedList) {
    localStorage.clear();
    favoriteMessages = [];
  } else {
    favoriteMessages = parsedList;
  }
}

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
}

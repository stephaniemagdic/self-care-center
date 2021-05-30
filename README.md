# Self Care Center

## Project Description:

  **Description**
  In this project, we designed an app that will allow the user to receive and favorite randomly generated affirmations and mantras. Those messages could be revisited on the favorite messages page. These messages can be removed from favorites and when the page is refreshed or navigated away from, local storage will hold on to the favorited messages so that upon reload, they will not be lost.

  + Access the app [here!](https://stephaniemagdic.github.io/self-care-center/)

## Functionality
  + The main page of the self care center will display a form that allows a user to choose the type of message they would like to receive.
  + Upon choosing the _Receive Message_ button, the page will randomly generated mantra or affirmation by using the value of the form's currently selected radio button.
  + If a user would like to save the message, the favorite button (blue heart icon) will generate a new instance of the Message class and save that to a favoriteMessages array that will be used when rendering and re-rendering a page.
  + Users can use the _View Your Favorite Messages_ button to navigate to the favorites page.
  + The favorites page will use the data model to render the page with the most updated messages.
  + If a user chooses, they can use the delete button attached to each message to splice the message from the favoriteMessages array to update the data model before re-rendering the page.
  + Local Storage is utilized in this app for the savedMessages page.

  --YOU ARE HERE.


## Programming Languages Used
  + JavaScript
  + HTML5
  + CSS

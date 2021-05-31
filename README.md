# Self Care Center

## Project Description:

  **Description**
  The Self Care Center is an affirmation and mantra generator. A user can receive and favorite randomly generated affirmations and mantras. Those messages could be revisited and removed on the favorite messages page. When the page is refreshed or navigated away from, local storage will hold on to the favorited messages so that upon reload, the favorite messages will not be lost.

  + Access the app [here!](https://stephaniemagdic.github.io/self-care-center/)

## Functionality
  + The main page of the self care center will display a form that allows a user to choose the type of message they would like to receive using radio buttons.
  + Upon choosing the Receive Message button, the page will randomly generate a mantra or affirmation by using the value of the form's currently selected radio button.
  + If a user would like to save the message, the favorite button (blue heart icon) will generate a new instance of the Message class and save that to a favoriteMessages array that will be accessed when rendering and re-rendering a page.
  + Users can use the View Your Favorite Messages button to navigate to the favorites page.
  + The favorites page will use the data model to render the page with the current state of the application.
  + If a user chooses, they can use the delete button attached to each message to splice the message from the favoriteMessages array to update the data model and re-render the page.
  + Local Storage is utilized in this app for the saved messages page (specifically to hold on to our favoriteMessages array state). Local storage is updated with JSON every time a change is made to the data model by invoking the update and getLocalStorage functions. This will sync our local storage and our savedMessages array when using the application.

## Programming Languages Used
  + JavaScript
  + HTML5
  + CSS

## Learning Goals

**This project should help you understand how to:**
+ Separate the data model and the DOM and use the data model as the source of truth for rendering a page or updating local storage.
+ Use the class constructor and new keyword to create new Messages when a message is favorited.
+ Access DOM elements and add event listeners to allow the user to interact with the page.
+ Use the event object in event handlers to check that the target of the event is on the node that you expect the function to be called on (ie, put an event listener on an entire section but only call the function if the appropriate element on the page (button) is clicked).
+ Check that messages are not duplicated by utilizing a for loop with a function scoped variable set to a boolean in order to allow the loop to iterate through the array until a match is found, therefore updating the variable.
+ Utilize the local storage property on the window object to allow users data to persist after a page is reloaded or navigated away from.

## Planning

  **Planning**
  + I worked through each step in the iteration and used pseudocode for each goal and the logic steps that went with those tasks.

  **WINS**
  + Using many many console logs and including breakpoints on chrome dev tool's source tab as well as inspecting local storage values on the applications tab when running my code helped me to find bugs.
  + I took one night to slow down and revisit the lessons and the Github examples for the DOM vs the data model so that I could write clean JS code that separated those concerns and utilized the data model as its source of truth. It also helped me to fully understand concepts before jumping back into the project.
  + I committed frequently on my javascript and used multiple pull requests and branches for each feature.
  + I researched local storage and learned about JSON and storing information in the localStorage property on the window object.
  + I slowed down and watched some CSS tutorials before going in to a messy CSS file and then slowly cleaned up my code.

  **Challenges**
  + At one point I did not realize I had been working on my local main branch and I also had a significant merge conflict early on in the project that I had to sort through.
  + My CSS and HTML files started out very messy because of inexperience and lack of careful planning. I learned that next time, I am going to be very intentional about planning these files out out and being certain about each piece before jumping in to the details.

## Contributors

  + Stephanie Magdic

## Additional Links

  + View the GitHub repo [here.](https://stephaniemagdic.github.io/self-care-center/)
  + View the app [here.](https://github.com/stephaniemagdic/self-care-center)
  + View the project set up, guidelines, and rubric [here.](https://frontend.turing.edu/projects/module-1/self-care-center.html)

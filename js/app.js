import { getStoryline } from "../data/storylines.js"

/*-------------------------------- Constants --------------------------------*/

const startBtn = document.querySelector('#start-button')


/*---------------------------- Variables (state) ----------------------------*/

let winner, loser, storyProgress

/*------------------------ Cached Element References ------------------------*/




//Everything you put in Cached element references, gives you access to your html

/*----------------------------- Event Listeners -----------------------------*/

startBtn.addEventListener('click', () => {
  const newStory = {
    text: getStoryline
  }
  //console.log('button working')
})
story.push(newStory)


//Bubbling -We can add an event listener to a top level object, and it can access the individual elements that are nested in the parent element.  Example: 



/*-------------------------------- Functions 
--------------------------------*/

function init() {
  story = [null]
  // if (story = null)
  //   return
  // have cast image return if story null
  // have start button display if story null
  // have text intro/prompt display if story null
  // have theme song play if story null

  render()
}



function createStory(evt) {
  const isStartButton = evt.target.id === "start-button"
  const newStory = {
    text: 
}
  console.log(isStartButton)

  // if user clicked start button return lazlo image
  // if user clicked start button return lazlo story text
  // if user clicked start button return 2 option buttons
  // if user clicked start button return 2 corresponding option texts
}



init()
//initialize the game, always put it for interaction on game


// Find music and load into asset folder
// finish resizing images and put them in image file
// Add HTML for:
// Each story image (one for each step in storyline)
// Advancing story buttons
// Reset button
// Welcome message text
// Game start prompt text
// Data file for story text
// Animation 
// Create functions for: 
// Init (settings for a new game)
// Determining when there is a winner
// Rendering a winner 
// Rendering text changes
// Rendering Image changes
// Add cached element references for:
// Start button
// 2 Buttons for advancing story (two different options at each step)
// Images changing when advancing story buttons are clicked
// Story text changing when advancing story buttons are clicked 
// Animation playing when player wins 
// Music playing when advancing story buttons are clicked
// Congratulatory message displaying when player wins
// Sorry message playing when player loses
// Add event listeners for:
// Start button
// Advancing story buttons (2 at each step)
// Reset button
// Add google fonts
// Add favicon to site

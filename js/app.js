import { getRandomOptionOne, getRandomOptionTwo } from "../data/storylines.js"

/*-------------------------------- Constants --------------------------------*/

// const startBtn = document.querySelector('#start-button')


/*---------------------------- Variables (state) ----------------------------*/

// let winner, loser, storyProgress
const stories = []

/*------------------------ Cached Element References ------------------------*/

const optionOneBtn = document.querySelector('#option-one-button')
const optionTwoBtn = document.querySelector('#option-two-button')
const cardContainer = document.querySelector('#card-container')

console.log(optionOneBtn, 'option-one-button')
console.log(optionTwoBtn, 'option-two-button')
console.log(cardContainer, 'Container')


//Everything you put in Cached element references, gives you access to your html

/*----------------------------- Event Listeners -----------------------------*/

optionOneBtn.addEventListener('click', createStory)
// const newOptionOneStory = {
//   option: "OptionOne",
//   text: getRandomOptionOne()
// }
// stories.push(newOptionOneStory)


optionTwoBtn.addEventListener('click', createStory)
// const newOptionTwoStory = {
//   option: "OptionTwo",
//   text: getRandomOptionTwo()
// }
// stories.push(newOptionTwoStory)



// startBtn.addEventListener('click', () => {
//   const newStory = {
//     text: getStoryline
//   }
//   //console.log('button working')
// })
// story.push(newStory)


//Bubbling -We can add an event listener to a top level object, and it can access the individual elements that are nested in the parent element.  Example: 



/*-------------------------------- Functions
--------------------------------*/

function createStory(evt) {
  const isOptionOne = evt.target.id === "option-one-button"
  const newStory = {
    option: isOptionOne ? "OptionOne" : "OptionTwo",
    text: isOptionOne ? getRandomOptionOne() : getRandomOptionTwo(),
  }
  stories.push(newStory)
  console.log(stories)
  render()
}

function render() {
  cardContainer.innerHTML = ""
  stories.forEach((story, idx) => {
    appendStory(story, idx)
  })
}

function appendStory(story, idx) {
  let storyCard = document.createElement('div')
  storyCard.classList.add('card', `${story.option.toLowerCase()}`)
  storyCard.innerHTML =
 
  `<div class="card-body">
    <p class="card-text">${story.text}</p>
  </div>
  <footer class="card-footer">
  <button class"btn delete-btn" id="delete-btn-${idx}>x</button>
  </footer>
  `
    cardContainer.appendChild(storyCard)
}

function deleteStory(evt) {
  const idx = evt.target.id.replace("delete-btn-", "")
  quotes.splice(idx, 1)
  render()
}

function addDeleteBtnListeners() {
  const deleteStoryBtns = document.querySelectorAll(".delete-btn")
  if (deleteStoryBtns.length) {
    deleteStoryBtns.forEach(deleteQuoteBtn => {
      deleteQuoteBtn.addEventListener('click', deleteQuote)
    })
  }
}

// function init() {
//   let story = [null]
//   let imageDisplay = []
  // if (story = null)
  //   return
  // have cast image return if story null
  // have start button display if story null
  // have text intro/prompt display if story null
  // have theme song play if story null

  //render()
//}

// function introStory(){
//   if (story = null) return introStory [0]
//   }



// function createStory(evt) {
//   const isStartButton = evt.target.id === "start-button"
//   const newStory = {
//     text: 
// }
//   console.log(isStartButton)

  // if user clicked start button return lazlo image
  // if user clicked start button return lazlo story text
  // if user clicked start button return 2 option buttons
  // if user clicked start button return 2 corresponding option texts
//}



//init()
//initialize the game, always put it for interaction on game


// Find music and load into asset folder
// finish resizing images and put them in image file
// Add HTML for:
// Each story image (one for each step in storyline)
// Advancing story buttons
// Reset button
// Welcome message text
// Game start prompt text
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
// Congratulatory message displaying when player wins
// Sorry message playing when player loses
// Add event listeners for:
// Start button
// Advancing story buttons (2 at each step)
// Reset button
// Add google fonts
// Add favicon to site

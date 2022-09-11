import {storyOptionOne, startStory} from "../data/storylines.js"



/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let stories = []

/*------------------------ Cached Element References ------------------------*/
const storyEl = document.getElementById("story")
console.log(storyEl)
//Displays text for story

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions
--------------------------------*/

function init() {
stories = [null]
//imageArray = [null]
  //winner, way to end story and display reset button
  render()
}
init()

function render() {
if (stories = null) {
  storyEl.textContent = startStory[0]
}

}



// Create Functions:
// render text, buttons, and image changes

// add boostrap to display text, iamges, buttons?

// Create cached element references for:
// Start button
// Option 1 button
// Option 2 button


// Add HTML for:
// Option 1 button
// Option 2 button
// Start button
// Story images
// Reset button
// Animation 

// Add event listeners for:
// Start button
// Option 1 Button
// Option 2 Button
// Reset button

// Add favicon to site
// Load music file/s into asset folder


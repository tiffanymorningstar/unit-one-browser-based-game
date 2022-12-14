
const startStory = [
  "You are a 310 year old vampire named ‘Lazlo Cravensworth’, currently staying with your wife Nadja and several vampire friends in Staten Island.  You awaken one evening feeling pretty damn good. With the entire night ahead of you, what do you do?"
]

const storyOptionOne = [
 "Don your favorite, cursed, Witch Skin Hat and head over to the ‘Sassy Cat Club’ to meet up with owner and fellow Vampire, Simon The Devious.", 
  "Thank Simon for his interest in your fabulous Witch Skin Hat, and gently inform him that due to your sentimental attachment you sadly cannot part with it.",
  "Go to the hospital to visit recently injured Guillermo, the familiar to your vampire friend Nandor the Relentless.",
  "Take back your beloved Witch Skin Hat",
  "Run away to a new town, and assume a new identity.",
  "Fight Jim the Vampire in an attempt to kill him and avoid paying off your debt.",
  "Return to your wife Nadja’s side.",
]

const storyOptionOneResult =[
  "Upon arriving at the Sassy Cat Club, you are greeted by the sights and sounds of a dark and edgy nightclub, where everyone looks like Billy Idol.  The place is packed, it would appear Simon’s establishment is still popular amongst the vampire set.  You are on your way to the bar to order a drink, when Simon spies you from across the room and addresses you as an old friend.  You exchange pleasantries, and things are going Splendidly!  Suddenly he notices your Witch Skin hat.  He has always admired it, and asks if he can have it. What do you do?",
  "Clearly upset, Simon calls his large entourage, ‘The Leatherskins’ to gather around him. Completely surrounded by his goons, he threatens you until you hand over the Witch Skin Hat.  After you hand it over, he kicks you out of the club, but not before mentioning that the only reason he stayed friends with you was so that he could one day lay claim to the hat.  Hatless and dejected, you trudge back to Staten Island.  What do you do next?",
  "Arriving at the hospital you discover your Vampire friend and housemate Nandor the Relentless, seated next to his familiar Guiellermo, who is on a hospital gurney in a full body cast.  Nandor took Guillermo to the skies to show him what it was like to fly, but accidently dropped him onto the ground below.  You hear a moaning from the gurney across the way.  The voice sounds familiar.  As you lean in to get a better look, you realize it is Simon The Devious in the room across the hall!  It turns out that after he put on the cursed Witch Skin Hat, he accidentally caused an explosion at the Sassy Cat Club.  You see several personal effects of Simon’s on the chair next to his gurney, including the Witch Skin Hat.  What do you do?",
  "Reunited with your Witch Skin Hat, you feel like you are on top of the world.  However, an old landlord, Jim the Vampire, you have been avoiding for 167 years due to an unpaid rent has tracked you down and is demanding immediate payment. What do you do?",
  "You now go by the name Jackie Daytona, a barkeep at Lucky Brew’s Bar and Grill in Clairton Pennsylvania.  As you pull pints and listen to the locals troubles, your former life as a vampire seems like it is a world away.  Everything is going to plan, until Jim the Vampire inevitably turns up one day at Lucky’s.  He doesn’t recognize you at first due to your ingenious human disguise, so you decide to stick around as you have become quite accustomed to your new lifestyle. However, it doesn’t take long before Jim notices your lack of reflection in the bar mirror, and demands his debt be paid.  What do you do?",
  "You and Jim begin a drag down knock out brawl.  Patrons leave in droves as you violently throw each other across the bar, and through walls and tables.  You breathe fire onto Jim, and accidentally set the money you were fighting over on fire,  The two of you laugh, and manage to work out your differences with words.  After gifting Jim a Big Mouth Billy Bass that was mounted on the bar wall, Jim forgives your debt.  With that resolved, you decide it’s time to walk away from life as Jackie Daytona.  What do you do next?",
  "Upon arriving back in town, Nadja cannot be found in your expansive estate.  You wander outside, only to find Nadja speaking to a man that looks strikingly familiar to a dead man you had known many years before.  You are not typically the jealous type, but something about this man is rubbing you the wrong way.  Nadja is quite taken with him, but you are an open minded chap and that usually doesn’t bother you.  And then it hits you, it is Gregor!  An old flame of Nadja’s that seems to end up reincarnated every so often and die a violent death.  Once you make this discovery you decide to kill Gregor, because you always hated him.  Nadja begs you to let him live just this once, it takes some convincing, but you eventually acquiesce to your beloved wife.  Gregor thanks you, and drives away on his motor bike.  He accidentally drives into a wire strung across the yard, decapitating him and killing him.  Despite his death, Nadja is elated that you would have let him live.  The two of you go back into the house to celebrate your return from Pennsylvania.",
]

const storyOptionTwo = [
  "Spend a low key night at home with your housemate and friend, energy vampire Colin Robinson.",  
  "Graciously give Simon The Devious your favorite, Witch Skin hat",
  "Accept an invitation to appear before the Vampiric Council",
  "Leave the Witch Skin Hat with Simon The Devious, it is a cursed hat after all.",
  "Fight Jim the Vampire and attempt to kill him to avoid paying off your debt",
  "Pay off your debt to Jim the Vampire.  The amount of your final month’s rent plus security deposit.",
  "Help your neighbor and human friend Sean with his legal troubles.",
]

const storyOptionTwoResult = [
  "Deep down you knew it was a bad idea to spend an evening alone with Colin Robinson.  As an energy vampire, Colin delights in telling you boring stories the entire evening.  At one point you manage to turn on the television, only for Colin to change a setting with the remote control and spend the next hour figuring out how to reconfigure it correctly.  Completely drained of your life force, you pass out on the couch.", 
  "You hand the Witch Skin Hat to Simon The Devious.  He is so thrilled by your gesture, he treats you to a round of alcohol infused blood on the house.  You, Simon, and his gang ‘the Leatherskins’ party into the early hours of the morning.  Inebriated by the alcohol, you pass out under a tree outside the club.  The rays of the morning light burn your body to an instant crisp.",
  "You arrive at the address that the Vampiric Council provided you, an old office building in an isolated part of town.  An assistant to the council meets you inside and brings you to where the council convenes in the basement.  Upon receiving the invitation you were excited about all of the possibilities this invitation could hold, perhaps holding a place on the vampiric council yourself?  The council emerges and performs a dramatic dance before lining up in a crescent shape before you.  The head of the council informs you that they are aware of the death of several vampires at your hand, and that the penalty is death.  You are brought to a well, where you will be exposed to the sun the following morning,  your body burnt to an instant crisp.",
  "Hopital option 2 result needs to be finished.",
  "Lazlo and Jim the Vampire fight.  Eventually Jim the Vampire ________,  setting you on fire, your body burning to an instant crisp.",
  "You recently discover that your neighbor and human friend Sean was the victim of a pyramid scheme.  A stranger conned him into buying a thousand “Guy Pillows”, convincing him that he could re-sell them to family and friends and make an enormous profit.  When he failed to sell enough to pay back the con man, he was brought to court.  As you had represented yourself as a barrister many years ago in a legal matter, you naturally consider yourself the right person to represent Sean in his court case. Unfortunately this experience did not translate into modern times, and Sean lost his court case."
]


// function getRandomOptionOne() {
//   return storyOptionOne[Math.floor(Math.random() * storyOptionOne.length)]
// }

// function getRandomOptionTwo() {
//   return storyOptionTwo[Math.floor(Math.random() * storyOptionTwo.length)]
// }

export {
  // getRandomOptionOne,
  // getRandomOptionTwo,
  startStory,
  storyOptionOne,
  storyOptionTwo,
  storyOptionOneResult,
  storyOptionTwoResult
}
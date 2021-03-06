/*--------------------------Constants-------------------------------*/
import { allDecisions, allSituations, allEndings } from "../data/paths.js"
const carCrash = new Audio('./sound/carCrash.wav')
const forest = new Audio('./sound/forest.mp3')
const ground = new Audio('./sound/ground.mp3')
const jaguar = new Audio('./sound/jaguar.mp3')
const hunger = new Audio('./sound/stomach.wav')
const click = new Audio('./sound/click.wav')
/*---------------------------Variables------------------------------*/



/*----------------- Cached Element References-----------------------*/
const strBtn = document.getElementById("strBtn")
const rstBtn = document.getElementById("rstBtn")
const prompt = document.getElementById("situation")
const dec1 = document.getElementById("firstD")
const dec2 = document.getElementById("secondD")
const dec3 = document.getElementById("thirdD")
const dec4 = document.getElementById("fourthD")
const title = document.getElementById("title")
const decRow = document.getElementById("decision-row")
const promptRow = document.getElementById("prompt-row")
const sloth = document.getElementById("sloth-img")



/*------------------------ Event Listeners -------------------------*/
dec1.addEventListener('mouseover', () => {
  click.play()
})
dec2.addEventListener('mouseover', () => {
  click.play()
})
dec3.addEventListener('mouseover', () => {
  click.play()
})
dec4.addEventListener('mouseover', () => {
  click.play()
})
dec1.addEventListener('click', storyLine)
dec2.addEventListener('click', storyLine)
dec3.addEventListener('click', storyLine)
dec4.addEventListener('click', storyLine)
strBtn.addEventListener('click', storyLine)
rstBtn.addEventListener('click', init)
sloth.addEventListener('click', () => {
  sloth.classList.remove("animate__animated", "animate__swing", "animate__slow", "animate__delay-1s")
  void sloth.offsetWidth
  sloth.classList.add("animate__animated", "animate__swing", "animate__slow", "animate__delay-1s")
})


/*--------------------------- Functions ----------------------------*/
init ()

function init (){
  title.textContent = "Simon the sloth, finding home"
  decRow.setAttribute("hidden", 1)
  rstBtn.setAttribute("hidden", 1)
  promptRow.setAttribute("hidden", 1)
  forest.pause()
  strBtn.removeAttribute("hidden")
  sloth.removeAttribute("hidden")
}

function storyLine (click){
  showDec ()
  decRow.removeAttribute("hidden")
  promptRow.removeAttribute("hidden")
  sloth.setAttribute("hidden",1)
  forest.volume = .75
  forest.play()
  strBtn.setAttribute("hidden", 1)
  let clicked = click.target.textContent
  console.log(clicked)
  if (clicked === 'Start'){
    ground.volume = .6
    setTimeout(function(){
      ground.play()
    }, 2000)
    prompt.textContent = allSituations[0]
    dec1.textContent = allDecisions[0]
    dec2.textContent = allDecisions[1]
    dec3.textContent = allDecisions[2]
    dec4.textContent = ''
  }
  if (clicked === allDecisions[0]){
    prompt.textContent = allSituations[1]
    dec1.textContent = allDecisions[3]
    dec2.textContent = allDecisions[4]
    dec3.textContent = allDecisions[5]
    dec4.textContent = allDecisions[6]
  }
  if(clicked === allDecisions[1]){
    prompt.textContent = allSituations[2]
    dec1.textContent = ''
    dec2.textContent = allDecisions[22]
    dec3.textContent = ''
    dec4.textContent = allDecisions[20]
  }
  if(clicked === allDecisions[2]){
    prompt.textContent = allSituations[11]
    dec1.textContent = ''
    dec2.textContent = allDecisions[27]
    dec3.textContent = ''
    dec4.textContent = ''
  }
  if (clicked === allDecisions[3]){
    prompt.textContent = allSituations[3]
    dec1.textContent = ''
    dec2.textContent = allDecisions[7]
    dec3.textContent = ''
    dec4.textContent = allDecisions[8]
  }
  if (clicked === allDecisions[4]){
    prompt.textContent = allSituations[3]
    dec1.textContent = ''
    dec2.textContent = allDecisions[7]
    dec3.textContent = ''
    dec4.textContent = allDecisions[8]
  }
  if (clicked === allDecisions[5]){
    prompt.textContent = allSituations[8]
    dec1.textContent = allDecisions[13]
    dec2.textContent = allDecisions[15]
    dec3.textContent = allDecisions[14]
    dec4.textContent = ''
  }
  if (clicked === allDecisions[6]){
    prompt.textContent = allSituations[3]
    dec1.textContent = ''
    dec2.textContent = allDecisions[7]
    dec3.textContent = ''
    dec4.textContent = allDecisions[8] 
    }
  if (clicked === allDecisions[7]){
    prompt.textContent = allSituations[7]
    dec1.textContent = ''
    dec2.textContent = allDecisions[11]
    dec3.textContent = ''
    dec4.textContent = allDecisions[12] 
  }
  if (clicked === allDecisions[8]){
    prompt.textContent = allSituations[4]
    dec1.textContent = ''
    dec2.textContent = allDecisions[9]
    dec3.textContent = ''
    dec4.textContent = allDecisions[10] 
  }
  if (clicked === allDecisions[9]){
    prompt.textContent = allEndings[0]
    rstBtn.removeAttribute("hidden")
    isLoser ()
  }
  if (clicked === allDecisions[10]){
    prompt.textContent = allEndings[1]
    isLoser ()
    carCrash.volume = .1
    carCrash.play()
  }
  if (clicked === allDecisions[11]){
    prompt.textContent = allSituations[4]
    dec1.textContent = ''
    dec2.textContent = allDecisions[9]
    dec3.textContent = ''
    dec4.textContent = allDecisions[10] 
  }
  if (clicked === allDecisions[12]){
    prompt.textContent = allSituations[8]
    dec1.textContent = allDecisions[13]
    dec2.textContent = allDecisions[14]
    dec3.textContent = allDecisions[15]
    dec4.textContent = ''
  }
  if (clicked === allDecisions[13]){
    prompt.textContent = allEndings[5]
    isLoser ()
    hunger.volume = .2
    hunger.play()
  }
  if (clicked === allDecisions[14]){
    prompt.textContent = allSituations[10]
    dec1.textContent = ''
    dec2.textContent = allDecisions[19]
    dec3.textContent = ''
    dec4.textContent = allDecisions[18]
  }
  if (clicked === allDecisions[15]){
    prompt.textContent = allSituations[9]
    dec1.textContent = ''
    dec2.textContent = allDecisions[16]
    dec3.textContent = ''
    dec4.textContent = allDecisions[17]
  }
  if (clicked === allDecisions[16]){
    prompt.textContent = allEndings[2]
    isWinner ()
  }
  if (clicked === allDecisions[17]){
    prompt.textContent = allSituations[10]
    dec1.textContent = ''
    dec2.textContent = allDecisions[19]
    dec3.textContent = ''
    dec4.textContent = allDecisions[18]
  }
  if (clicked === allDecisions[18]){
    prompt.textContent = allEndings[2]
    isWinner ()
  }
  if (clicked === allDecisions[19]){
    prompt.textContent = allEndings[3]
    isWinner ()
  }
  if (clicked === allDecisions[20]){
    prompt.textContent = allSituations[3]
    dec1.textContent = ''
    dec2.textContent = allDecisions[7]
    dec3.textContent = ''
    dec4.textContent = allDecisions[8] 
  }
  if (clicked === allDecisions[21]){
    prompt.textContent = allDecisions[5]
    dec1.textContent = ''
    dec2.textContent = allDecisions[22]
    dec3.textContent = ''
    dec4.textContent = allDecisions[23]
  }
  if (clicked === allDecisions[22]){
    prompt.textContent = allSituations[6]
    dec1.textContent = ''
    dec2.textContent = allDecisions[25]
    dec3.textContent = ''
    dec4.textContent = allDecisions[26]
  }
  if (clicked === allDecisions[23]){
    prompt.textContent = allSituations[6]
    dec1.textContent = ''
    dec2.textContent = allDecisions[25]
    dec3.textContent = ''
    dec4.textContent = allDecisions[26]
  }
  if (clicked === allDecisions[24]){
    prompt.textContent = allEndings[4]
    isLoser ()
    jaguar.volume = .1
    jaguar.play()
  }
  if(clicked === allDecisions[25]){
    prompt.textContent = allSituations[13]
    dec1.textContent = allDecisions[29]
    dec2.textContent = ''
    dec3.textContent = allDecisions[30]
    dec4.textContent = ''
  }
  if(clicked === allDecisions[26]){
    prompt.textContent = allEndings[4]
    isLoser ()
    jaguar.volume = .1
    jaguar.play()
  }
  if(clicked === allDecisions[27]){
    prompt.textContent = allSituations[12]
    dec1.textContent = allDecisions[23]
    dec2.textContent = ''
    dec3.textContent = ''
    dec4.textContent = ''
  }
  if(clicked === allDecisions[29]){
    prompt.textContent = allEndings[5]
    isLoser ()
    hunger.volume = .2
    hunger.play()
  }
  if(clicked === allDecisions[30]){
    prompt.textContent = allSituations[8]
    dec1.textContent = allDecisions[13]
    dec2.textContent = allDecisions[14]
    dec3.textContent = allDecisions[15]
    dec4.textContent = ''
  }
}
function isWinner () {
  rstBtn.removeAttribute("hidden")
  dec1.setAttribute("hidden", 1)
  dec2.setAttribute("hidden", 1)
  dec3.setAttribute("hidden", 1)
  dec4.setAttribute("hidden", 1)
  title.textContent = "You win!"
  decRow.setAttribute("hidden",1)
}
function isLoser () {
  rstBtn.removeAttribute("hidden")
  dec1.setAttribute("hidden", 1)
  dec2.setAttribute("hidden", 1)
  dec3.setAttribute("hidden", 1)
  dec4.setAttribute("hidden", 1)
  decRow.setAttribute("hidden",1)
  title.textContent = "You lose!"
}
function showDec () {
  dec1.removeAttribute("hidden")
  dec2.removeAttribute("hidden")
  dec3.removeAttribute("hidden")
  dec4.removeAttribute("hidden")
}

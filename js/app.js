/*--------------------------Constants-------------------------------*/
import { allDecisions, allSituations, allEndings } from "../data/paths.js"


/*---------------------------Variables------------------------------*/



/*----------------- Cached Element References-----------------------*/
const strBtn = document.getElementById("strbtn")
const rstBtn = document.getElementById("rstbtn")
const prompt = document.getElementById("situation")
const dec1 = document.getElementById("firstD")
const dec2 = document.getElementById("secondD")
const dec3 = document.getElementById("thirdD")
const dec4 = document.getElementById("fourthD")



/*------------------------ Event Listeners -------------------------*/
dec1.addEventListener('click', storyLine)
dec2.addEventListener('click', storyLine)
dec3.addEventListener('click', storyLine)
dec4.addEventListener('click', storyLine)


/*--------------------------- Functions ----------------------------*/
init ()

function init (){
  dec1.textContent = allDecisions[0]
  dec2.textContent = allDecisions[1]
  dec3.textContent = allDecisions[2]
  dec4.textContent = ''
  prompt.textContent = allSituations[0]
}

function storyLine (click){
  let clicked = click.target.textContent
  console.log(clicked)
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
    prompt.textContent = allSituations[12]
    dec1.textContent = ''
    dec2.textContent = allDecisions[22]
    dec3.textContent = ''
    dec4.textContent = allDecisions[23]
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
    // show replay button and zoo screen/sound
  }
  if (clicked === allDecisions[10]){
    prompt.textContent = allEndings[1]
    //show replay button and death screen
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
  }
  if (clicked === allDecisions[13]){
    prompt.textContent = allEndings[5]
    // show replay
    // death screen
    // grunt death sound
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
    //show replay
    //confetti
    //display you won screen
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
    //show replay
    //confetti
    //display you won screen
  }
  if (clicked === allDecisions[19]){
    prompt.textContent = allEndings[3]
    //show replay
    //confetti
    //display you won screen
    //display house in forest
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
    dec2.textContent = allDecisions[23]
    dec3.textContent = ''
    dec4.textContent = allDecisions[24]
  }
  if (clicked === allDecisions[23]){
    prompt.textContent = allSituations[13][14][8]
    dec1.textContent = ''
    dec2.textContent = allDecisions[14]
    dec3.textContent = ''
    dec4.textContent = allDecisions[15]
  }
  if (clicked === allDecisions[24]){
    prompt.textContent = allEndings[4]
    // replay
    //death screen
    //jaguar noise
    dec1.textContent = ''
    dec2.textContent = ''
    dec3.textContent = ''
    dec4.textContent = ''
  }
  if (clicked === allDecisions[25]){
    prompt.textContent = 
    dec1.textContent =
    dec2.textContent =
    dec3.textContent =
    dec4.textContent =
  }
  
}
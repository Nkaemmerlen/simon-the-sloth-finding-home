/*--------------------------Constants-------------------------------*/
import { allDecisions, allSituations, allEndings } from "../data/paths.js"
// console.log(allDecisions[7])
// console.log(allSituations[4])
// console.log(allEndings[2])

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
    dec2.textContent = allDecisions[23]
    dec3.textContent = ''
    dec4.textContent = allDecisions[24]
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
}
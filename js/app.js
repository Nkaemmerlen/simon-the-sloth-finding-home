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
    console.log('wooh')
  }
  if(clicked === allDecisions[2]){
    console.log('yippee')
  }
  if (clicked === allDecisions[4]){
    console.log("you made it")
  }

}
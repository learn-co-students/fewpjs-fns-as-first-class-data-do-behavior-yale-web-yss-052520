/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  let time = parseInt((str.split('')[0]+ str.split('')[1]), 10)
  if (time < 12 ){
    return "Good Morning"
  }
  if (time > 17){
    return "Good Evening"
  }
    return "Good Afternoon"
  }


/* Write your implementation of displayMessage() */
function displayMessage(str){
  document.getElementById("greeting").innerText = str
}

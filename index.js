/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(HH) {
  const hour = parseInt(HH, 10)
  if(hour < 12) {
    return "Good Morning"
  }
  if(hour > 17) {
    return "Good Evening"
  }
  if(12 < hour < 17) {
    return "Good Afternoon"
  }

}


/* Write your implementation of displayMessage() */
function displayMessage(input) {
  document.getElementById("greeting").innerText = input
}
/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const time = timeString.split(':')
  if (time[0] < 12) {
    return "Good Morning"
  } else if (time[0] > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}



/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
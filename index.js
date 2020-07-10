/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let time = timeString.split(':')
  time = parseInt(time[0].concat(time[1]))
  if (time < 1200) {
    return "Good Morning"
  } else if (time > 1700) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  const node = document.querySelector('#greeting')
  node.innerText = greeting
}

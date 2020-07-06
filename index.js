/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  let hour = timeString.split(':')[0]
  if (parseInt(hour, 10) < 12) {
    return "Good Morning"
  }
  else if (parseInt(hour, 10) > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}

function displayMessage(str) {
  let greetingNode = document.querySelector('#greeting')
  greetingNode.innerText = str
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

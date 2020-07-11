/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let num = parseInt(timeString.split(':').join(''))

  if (num < 1200) {
    return "Good Morning"
  } else if (num > 1200 && num < 1700) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

const greeting = document.querySelector('h1#greeting')
/* Write your implementation of displayMessage() */
function displayMessage(greetMe) {
  greeting.innerText = `${greetMe}`
}
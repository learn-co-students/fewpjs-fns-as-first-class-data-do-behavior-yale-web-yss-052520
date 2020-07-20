/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
  const hr = parseInt(timeStr)
  switch(true) {
    case (hr < 12):
      return "Good Morning"; break
    case (hr >= 12 && hr < 17):
      return "Good Afternoon"; break
    case (hr > 17 && hr < 24):
      return "Good Evening"; break
    default:
      return "Time not valid"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  const node = document.querySelector('#greeting')
  node.innerText = msg
}

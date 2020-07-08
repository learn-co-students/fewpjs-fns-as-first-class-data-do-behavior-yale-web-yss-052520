/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const t = time.split(":")[0]
  if (t < 12) {
    return "Good Morning"
  } else if (t < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(msg){
  document.querySelector("h1").innerText = msg;
}
/* Write your implementation of displayMessage() */

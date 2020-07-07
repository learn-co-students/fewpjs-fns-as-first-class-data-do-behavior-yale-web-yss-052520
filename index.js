/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {

  let num = parseInt(timeString.split(":")[0])

  if (num < 12) { return "Good Morning"
  }
  else if (num < 17) { return "Good Afternoon"
  }
  else { return "Good Evening"
  }

}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {

  let node = document.getElementById("greeting")
  node.innerText = msg


}
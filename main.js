const divs = document.querySelectorAll('div')

function logText(event) {
  console.log(this.classList.value)
  // event.stopPropagation() // Stop bubbling
  console.log(this)
}

divs.forEach(div => {
  div.addEventListener('click', logText, {
    capture: false,
    once: true
  })
})
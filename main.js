const divs = document.querySelectorAll('div')

function logText(event) {
  console.log(this.classList.value)
  console.log(this)
}

divs.forEach(div => {
  div.addEventListener('click', logText, {
    capture: true
  })
})
const keyboard = document.querySelector('.keyboard')
const setBtns = new Set()

function activeBtn( event ) {
  event.preventDefault()
  if (event.target.closest('button')) {
    event.target.classList.add('btn-active')
    keyboard.addEventListener('mouseup', deActiveBtn)
    keyboard.addEventListener('mouseout', deActiveBtn)
  }
}

function deActiveBtn( event ) {
  event.target.classList.remove('btn-active')
}

function checkBtn(set) {
  set.forEach(key => {
    const button = keyboard.querySelector(`#${key}`) 
    button.classList.add('btn-active')
  })
}

keyboard.addEventListener('mousedown', activeBtn)

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  setBtns.add(e.code)
  checkBtn(setBtns)
})

document.addEventListener('keyup', (e) => {
  if (!setBtns.has(e.code)) return
  setBtns.delete(e.code)
  const button = keyboard.querySelector(`#${e.code}`)
  button.classList.remove('btn-active')
})


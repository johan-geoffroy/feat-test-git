const texts = document.querySelectorAll('.dynamic-text')
const container = document.querySelector('.container')
const gradiants = [
    'linear-gradient(to left, #FF4B2B, #FF416C)',
    'linear-gradient(to top, #00c6ff, #0072ff)',
    'linear-gradient(to bottom, #ff0084, #33001b)'
]
let counter = 0

const rollupText = () => {
    const rollInterval = setInterval(() => {
        if (counter === texts.length -1) {
            clearInterval(rollInterval)
        } else {
            counter++
            
            container.style.background = gradiants[counter]
            texts[counter -1].classList.add('text-out')
            texts[counter -1].classList.remove('text-in')
            texts[counter].classList.toggle('text-in')
        }
    }, 1500)
}

// setTimeout(() => {
//     rollupText()
// }, 1000)
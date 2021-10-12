const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

const arr = [1, 2, 3, 4, 5]
    // button.addEventListener('click', (req, res) => {
    //     localStorage.setItem('InputValue', input.value)
    //     div.innerHTML = input.value
    // })
localStorage.setItem('val', JSON.stringify(arr))

console.log(JSON.parse(localStorage.getItem('val')))
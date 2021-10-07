//let response = fetch
const list = document.querySelector('ul')

let arr = ["one", "Two", "Three", "Four"]


arr.forEach(chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    element.addEventListener('click', (e) => {
        //console.log(e.target.innerHTML)
        const userInput = window.prompt(`are you shure want to delete ${chore}`)
        if (userInput === 'yes') e.target.remove()
    })

    list.appendChild(element)
})
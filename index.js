const body = document.querySelector('body')

// Astronauts in space

fetch('http://api.open-notify.org/astros.json')
    .then((res) => res.json())
    .then((data) => {
        renderSpaceTitle(data.number)
        renderAstroNames(data.people)
    })

function renderSpaceTitle(numberOfAstros) {
    const h2 = document.createElement('h2')
    h2.innerHTML = `There are ${numberOfAstros} astronauts in space, they are:`
    body.appendChild(h2)
}

function renderAstroNames(people) {
    const ul = document.createElement('ul')

    people.forEach((person) => {
        const li = document.createElement('li')
        li.innerHTML = person.name
        ul.appendChild(li)
    })

    body.appendChild(ul)
}

// Astronauts in space

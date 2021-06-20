// Dog fan website

function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            const img = document.getElementById('random-dog')

            img.setAttribute('src', data.message)
        })
}

function renderRandomDogImageInterval(interval) {
    getRandomDogImage()
    setInterval(getRandomDogImage, interval)
}

function renderListOfBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((res) => res.json())
        .then((data) => {
            const ul = document.createElement('ul')
            document.body.appendChild(ul)

            const breeds = Object.keys(data.message)

            breeds.forEach((breed) => {
                const li = document.createElement('li')
                li.innerHTML = breed

                ul.appendChild(li)
            })
        })
}

function renderDogBreedImage(breedName) {
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then((res) => res.json())
        .then((data) => {
            const figure = document.createElement('figure')
            const img = document.createElement('img')
            img.setAttribute('src', data.message)
            document.body.appendChild(figure)
            figure.appendChild(img)

            const figcaption = document.createElement('figcaption')
            figcaption.innerHTML = breedName
            figure.appendChild(figcaption)
        })
}

renderDogBreedImage('cattledog')
renderRandomDogImageInterval(2000)
renderListOfBreeds()

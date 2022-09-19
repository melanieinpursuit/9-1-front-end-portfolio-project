
const form = document.querySelector("form")
// /* Variable for entire page. */

const character = document.querySelector("#characters")
// /* Variable to pick out characters from HTML. */

const characterSearch = document.querySelector(".character-data")
// /* Variable for specific character search. */

const resetButton = document.querySelector("button")

// let allCharacters = [];

const origAPI = "https://thronesapi.com/api/v2/Characters"

// const allChars = []
let allCharData;
const populateCharacters = () => {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => {
        return response.json()
    })
    .then(data => {
        allCharData = data
        console.log(data)
        data.forEach(char => {
            const fullName = char.fullName
            const title = char.title
            const family = char.family
            const image = char.imageUrl
            // allChars.push(fullName)
            // allChars.sort()
            // console.log(allChars)
    
            const charImg = document.createElement('img')
            charImg.setAttribute("src", image)
    
            const wholeName = document.createElement("p")
            wholeName.innerHTML = `<strong>Full Name:</strong> ${fullName}`
    
            const charTitle = document.createElement("p")
            charTitle.innerHTML = `<strong>Title:</strong> ${title}`
    
            const famName = document.createElement("p")
            famName.innerHTML = `<strong>House Name:</strong> ${family}`
    
            characterSearch.append(charImg, wholeName, charTitle, famName)
        })
    })
}

populateCharacters()

form.addEventListener("submit", (event) => {
    
    event.preventDefault() /* Prevents page from refreshing after clicking search. */
    
    const results = document.querySelector("#results")
    results.innerHTML = ""
    let input = event.target.characters.value
    console.log(input)
    allCharData.forEach(char => {
        // console.log(char.fullName)
    if (char.fullName.toLowerCase().includes(input.toLowerCase())) {
        const fullName2 = char.fullName
        const title2 = char.title
        const family2 = char.family
        const image2 = char.imageUrl
        characterSearch.innerHTML = ""

        const charImg = document.createElement('img')
        charImg.setAttribute("src", image2)

        const wholeName = document.createElement("p")
        wholeName.innerHTML = `<strong>Full Name:</strong> ${fullName2}`

        const charTitle = document.createElement("p")
        charTitle.innerHTML = `<strong>Title:</strong> ${title2}`

        const famName = document.createElement("p")
        famName.innerHTML = `<strong>House Name:</strong> ${family2}`

        results.append(charImg, wholeName, charTitle, famName)
}})


form.reset()
})

resetButton.addEventListener("click", () => {
    populateCharacters()
    console.log("test")
})
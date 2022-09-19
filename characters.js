
const form = document.querySelector("form")
// /* Variable for entire page. */

const character = document.querySelector("#characters")
// /* Variable to pick out characters from HTML. */

const characterSearch = document.querySelector(".character-data")
// /* Variable for specific character search. */

// let allCharacters = [];

const origAPI = "https://thronesapi.com/api/v2/Characters"

fetch('https://thronesapi.com/api/v2/Characters')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data)
    data.forEach(char => {
        const fullName = char.fullName
        const title = char.title
        const family = char.family
        const image = char.imageUrl

        const charImg = document.createElement('img')
        charImg.setAttribute("src", image)

        // const charFirstName = document.createElement("p")
        // charFirstName.innerHTML = `<strong>First Name:</strong> ${firstName}`
        
        // const charLastName = document.createElement("p")
        // charLastName.innerHTML = `<strong>Last Name:</strong> ${lastName}`

        const wholeName = document.createElement("p")
        wholeName.innerHTML = `<strong>Full Name:</strong> ${fullName}`

        const charTitle = document.createElement("p")
        charTitle.innerHTML = `<strong>Title:</strong> ${title}`

        const famName = document.createElement("p")
        famName.innerHTML = `<strong>House Name:</strong> ${family}`

        characterSearch.append(charImg, wholeName, charTitle, famName)
        
        form.addEventListener("submit", (event) => {
            
            event.preventDefault() /* Prevents page from refreshing after clicking search. */
            
            let input = event.target.characters.value
            data.filter(char => {
        
            if (input === char.firstName) {
                console.log(char.firstName)
        
                wholeName.innerHTML = `<strong>Full Name:</strong> ${fullName}`
        
                charTitle.innerHTML = `<strong>Title:</strong> ${title}`
        
                famName.innerHTML = `<strong>House Name:</strong> ${family}`
        }})

            form.reset()
    })
})
})

// Make it so w

const form = document.querySelector("form")
/* Variable for entire page. */

const character = document.querySelector("#characters")
/* Variable to pick out characters from HTML. */

const characterSearch = document.querySelector(".character-data")
/* Variable for specific character search. */

/* Creating event listener for submit button. */
form.addEventListener("submit", (event) => {
    
    event.preventDefault() /* Prevents page from refreshing after clicking search. */
    
    console.log(event.target.value)
    
    // let id

    if (id.value.toLowerCase() === "daenerys targaryen" || id.value.toLowerCase() === "daenerys") {
        id = 0   
    } 

    console.log(id)
    
    form.reset()
    
    /* Variable to pick out the value of the character entered. */
    const baseAPI = `https://thronesapi.com/api/v2/Characters/${id}`
    /* Variable for API link. */
    console.log(baseAPI)
    
    fetch(baseAPI) /* Fetching info from API. */
    .then ((res) => res.json())
    .then ((result) => {

        let firstName = result.firstName.value
        /* Variable to represent the first name inputted. */

        let lastName = result.lastName.value
        /* Variable to represent the last name inputted. */

        let fullName = result.fullName.value
        /* Variable to represent the full name inputted. */

        let title = result.title.value 
        /* Variable to represent the title inputted. */

        let family = result.family.value
        /* Variable to represent the family inputted. */

        const fName = document.createElement("p")
        fName.innerHTML = `<strong>First Name:</strong> ${firstName}`

        const lName = document.createElement("p")
        lName.innerHTML = `<strong>Last Name:</strong> ${lastName}`

        const wholeName = document.createElement("p")
        wholeName.innerHTML = `<strong>Full Name:</strong> ${fullName}`

        const charTitle = document.createElement("p")
        charTitle.innerHTML = `<strong>Title:</strong> ${title}`

        const famName = document.createElement("p")
        famName.innerHTML = `<strong>House Name:</strong> ${family}`

        characterSearch.append(fName, lName, wholeName, charTitle, famName)
    })
})
const mainContainer = document.querySelector(".mainbody")
const subContainer = document.querySelector(".input")
const button = document.querySelectorAll(".style")
const acButton = document.querySelector(".ac")
const pMinus = document.querySelector(".plus-minus")
const perc = document.querySelector(".percent")
const redd = document.querySelectorAll(".red")
const icon = document.querySelector(".the-icons")
const btnClick = document.querySelector(".moon")



//MY LOCAL STORAGE
let themeState = true

if (localStorage.getItem("themeState") == null) {
    console.log("Does not exist");

    const data = JSON.stringify(themeState)
    localStorage.setItem("themeState", data)
    console.log("Database created 🛢️");
}
else {
    // Get what is in local storage
    const rawLocalstorage = localStorage.getItem("themeState")
    // convert local storage to object
    const data = JSON.parse(rawLocalstorage);
    // Update to sync local storage and note array
    themeState = data
}


btnClick.addEventListener("click", switchUp)



function switchUp() {
    if (themeState) {
        mainContainer.style.backgroundColor = "white"
    mainContainer.style.color = "black"

    subContainer.style.backgroundColor = "rgb(231, 231, 231)"
    subContainer.style.color = "black"

    

    for (let index = 0; index < button.length; index++){
        const element = button[index];
        element.style.backgroundColor = "white"
        element.style.color = "black"
    }

    for (let index = 0; index < redd.length; index++){
        const element = redd[index];
        element.style.backgroundColor = "white"
        element.style.color = "#BE585A"
    }

    pMinus.style.backgroundColor = "white"
    pMinus.style.color = "#279585"

    acButton.style.backgroundColor = "white"
    acButton.style.color = "#279585"

    perc.style.backgroundColor = "white"
    perc.style.color = "#279585"

    icon.style.backgroundColor = "rgb(231, 231, 231)"

    
    }

    else {
        mainContainer.style.backgroundColor = "#292D36"
    mainContainer.style.color = "white"

    subContainer.style.backgroundColor = "#2E2E39"
    subContainer.style.color = "white"

    for (let index = 0; index < button.length; index++){
        const element = button[index];
        element.style.backgroundColor = "#292D36"
        element.style.color = "white"
    }

    for (let index = 0; index < redd.length; index++){
        const element = redd[index];
        element.style.backgroundColor = "#292D36"
        element.style.color = "#BE585A"
    }    

    pMinus.style.backgroundColor = "#292D36"
    pMinus.style.color = "#279585"

    acButton.style.backgroundColor = "#292D36"
    acButton.style.color = "#279585"

    perc.style.backgroundColor = "#292D36"
    perc.style.color = "#279585"

    themeStateDark = true
    }

    themeState = !themeState
    const data = JSON.stringify(themeState)
    localStorage.setItem("themeState", data)
}


if (themeState) {
    mainContainer.style.backgroundColor = "white"
    mainContainer.style.color = "black"

    subContainer.style.backgroundColor = "rgb(231, 231, 231)"
    subContainer.style.color = "black"

    

    for (let index = 0; index < button.length; index++){
        const element = button[index];
        element.style.backgroundColor = "white"
        element.style.color = "black"
    }

    for (let index = 0; index < redd.length; index++){
        const element = redd[index];
        element.style.backgroundColor = "white"
        element.style.color = "#BE585A"
    }

    pMinus.style.backgroundColor = "white"
    pMinus.style.color = "#279585"

    acButton.style.backgroundColor = "white"
    acButton.style.color = "#279585"

    perc.style.backgroundColor = "white"
    perc.style.color = "#279585"

    icon.style.backgroundColor = "rgb(231, 231, 231)"

    
}

else {
    mainContainer.style.backgroundColor = "#292D36"
    mainContainer.style.color = "white"

    subContainer.style.backgroundColor = "#2E2E39"
    subContainer.style.color = "white"

    for (let index = 0; index < button.length; index++){
        const element = button[index];
        element.style.backgroundColor = "#292D36"
        element.style.color = "white"
    }

    for (let index = 0; index < redd.length; index++){
        const element = redd[index];
        element.style.backgroundColor = "#292D36"
        element.style.color = "#BE585A"
    }    

    pMinus.style.backgroundColor = "#292D36"
    pMinus.style.color = "#279585"

    acButton.style.backgroundColor = "#292D36"
    acButton.style.color = "#279585"

    perc.style.backgroundColor = "#292D36"
    perc.style.color = "#279585"

    
}









//MY CALCULATOR

let themeStateDark = true

btnClick.addEventListener("click", function(){
console.log(themeStateDark);

if(themeStateDark == true){
    mainContainer.style.backgroundColor = "white"
    mainContainer.style.color = "black"

    subContainer.style.backgroundColor = "rgb(231, 231, 231)"
    subContainer.style.color = "black"

    

    for (let index = 0; index < button.length; index++){
        const element = button[index];
        element.style.backgroundColor = "white"
        element.style.color = "black"
    }

    for (let index = 0; index < redd.length; index++){
        const element = redd[index];
        element.style.backgroundColor = "white"
        element.style.color = "#BE585A"
    }

    pMinus.style.backgroundColor = "white"
    pMinus.style.color = "#279585"

    acButton.style.backgroundColor = "white"
    acButton.style.color = "#279585"

    perc.style.backgroundColor = "white"
    perc.style.color = "#279585"

    icon.style.backgroundColor = "rgb(231, 231, 231)"

    themeStateDark = false
}
else{
    mainContainer.style.backgroundColor = "#292D36"
    mainContainer.style.color = "white"

    subContainer.style.backgroundColor = "#2E2E39"
    subContainer.style.color = "white"

    for (let index = 0; index < button.length; index++){
        const element = button[index];
        element.style.backgroundColor = "#292D36"
        element.style.color = "white"
    }

    for (let index = 0; index < redd.length; index++){
        const element = redd[index];
        element.style.backgroundColor = "#292D36"
        element.style.color = "#BE585A"
    }    

    pMinus.style.backgroundColor = "#292D36"
    pMinus.style.color = "#279585"

    acButton.style.backgroundColor = "#292D36"
    acButton.style.color = "#279585"

    perc.style.backgroundColor = "#292D36"
    perc.style.color = "#279585"

    themeStateDark = true
}


})




//Local storage for the themestate
// const div = document.querySelector("div")
// const button = document.querySelector("button")
// const mainContainer = document.querySelector(".mainbody")



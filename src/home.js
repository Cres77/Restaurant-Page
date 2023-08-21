export {homePage}

const homePage = () => {
    const mainContentArea = document.querySelector(".main")

    const home = document.createElement("div")
    home.classList.add("home")

    const hugeDescrip = document.createElement("h1")
    hugeDescrip.classList.add("hugeDescrip")
    hugeDescrip.textContent = "Exquisite Bridge Cuisine with Live music!"
    
    
    const plea = document.createElement("h3")
    plea.classList.add("plea")
    plea.textContent = "Come check us out we know you'll love us! We are located right under the bridge in the picture."
    const contact = document.createElement("h4")
    contact.textContent = "504-111-1111"
    contact.classList.add("phone")

    plea.appendChild(contact)

    home.appendChild(hugeDescrip)
    home.appendChild(plea)


    mainContentArea.appendChild(home)
}
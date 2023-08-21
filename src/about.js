export{aboutPage}

const aboutPage = () =>{
    const mainContentArea = document.querySelector(".main")

    const about = document.createElement("div")
    about.classList.add("about")
    


    const aboutTitle = document.createElement("h1")
    aboutTitle.textContent = "ABOUT"
    aboutTitle.classList.add("pageTitle")
    


    const owner = document.createElement("div")
    const ownerName = document.createElement("h1")
    ownerName.textContent = "Apesese(Apesesehao)"
    ownerName.classList.add("ownerName")
    const ownerPicture = document.createElement("img")
    ownerPicture.setAttribute("src","https://media.npr.org/assets/img/2023/01/26/ap22348502069374_custom-b7969d748ec82eec0169bfa3cee5632f7a7d3f4f-s1100-c50.jpg")
    ownerPicture.style.height = "400px"
    ownerPicture.style.width = "600px"
    const ownerInfo = document.createElement("div")
    ownerInfo.textContent = "Born in 872, Apesese has always wanted to bring about change in the world. From a young age he learned to cook and do chores. Unlike those around him, he hated to go out to eat because he thought it was such a hassle. Many found this weird and after a while stopped associating with him. It was during this time that Apesese began to climb his way to the top of society. He was very lonely with nothing but the comfort and companionship of his own work. Cooking was always something that stuck with him as a kid. Out of everything he did, he always found a reason to cook. One day he stumbled upon a child who wanted to eat so eventually Apesese brought the kid a meal that he made. The kid was overjoyed and Apesese found so much joy in it that he finally overcame his hate of restaurants to create the very one we know and eat from today."
    ownerInfo.style.width = "600px"
    
    owner.appendChild(ownerName)
    owner.appendChild(ownerPicture)
    owner.appendChild(ownerInfo)

    const goal = document.createElement("div")
    const goalTitle = document.createElement("h2")
    goalTitle.textContent = "Goal"
    goalTitle.style.color= "gold"
    goalTitle.style.marginTop = "90px"

    const restaurantGoal = document.createElement("div")
    restaurantGoal.textContent = "Apesesehao established this restaurant in the hopes of feeding those who are hungry and looking to eat. Everyday people need to eat and therfore the perfect solution came to Apesese. To this day we still live out his ideals of feeding everyone and making sure they are fed."
    restaurantGoal.style.width = "600px"
    
    goal.appendChild(goalTitle)
    goal.appendChild(restaurantGoal)


    about.appendChild(aboutTitle)
    about.appendChild(owner)
    about.appendChild(goal)

    mainContentArea.appendChild(about)

}
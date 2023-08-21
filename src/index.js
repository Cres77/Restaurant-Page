import "./style.css"
import {menuPage} from "./menu.js"
import {aboutPage} from "./about.js"
import {homePage} from "./home.js"

const content = document.querySelector("#content")
content.style.backgroundImage = "url('https://free4kwallpapers.com/uploads/originals/2015/10/28/beautiful-old-bridge-in-saxony-wallpaper.jpg')"



function clearContent(){
    while(mainContentArea.lastChild){
        mainContentArea.removeChild(mainContentArea.lastChild)
    }
}


const header = document.createElement("div")
header.classList.add("header")
const title = document.createElement("h1")
title.textContent = "Apesesehao"
title.classList.add("title")

const nav = document.createElement("div")
nav.classList.add("nav")

const home = document.createElement("button")
home.textContent = "Home"
home.addEventListener("click",()=>{
    clearContent()
    homePage()
})
const menu = document.createElement("button")
menu.textContent = "Menu"
menu.addEventListener("click",()=>{
    clearContent()
    menuPage()
})
const about = document.createElement("button")
about.textContent = "About"
about.addEventListener("click",()=>{
    clearContent()
    aboutPage()
})


nav.appendChild(home)
nav.appendChild(menu)
nav.appendChild(about)
header.appendChild(title)
header.appendChild(nav)

const mainContentArea = document.createElement("div")
mainContentArea.classList.add("main")





const footnote = document.createElement("div")
footnote.classList.add("footnote")
footnote.textContent = "CopyRight of Orizon @Github"



content.appendChild(header)
content.appendChild(mainContentArea)
content.appendChild(footnote)

homePage()
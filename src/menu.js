export {menuPage}

const menuPage = () =>{
    const mainContentArea = document.querySelector(".main")
    
    const menu = document.createElement("div")
    menu.classList.add("menu")

    const menuTitle = document.createElement("h1")
    menuTitle.textContent = "MENU"
    menuTitle.classList.add("pageTitle")

    const dish1 = document.createElement("div")
    dish1.classList.add("dish")
    const dish1Image = document.createElement("img")
    dish1Image.setAttribute("src","https://www.favfamilyrecipes.com/wp-content/uploads/2023/01/Shrimp-PoBoy-Sandwich.jpg")
    const dish1Info = document.createElement("div")
    dish1Info.textContent = "Shrimp Po Boy sandwiches are the ultimate sandwich for seafood lovers! Tender shrimp drizzled in a creamy, spicy sauce and topped with crunchy cabbage on a soft roll, it’s the perfect balance of flavor, texture, and color."

    const dish2 = document.createElement("div")
    dish2.classList.add("dish")
    const dish2Image = document.createElement("img")
    dish2Image.setAttribute("src","https://insanelygoodrecipes.com/wp-content/uploads/2020/08/Popeyes_Buttermilk_Biscuits-1024x1024.webp")
    const dish2Info = document.createElement("div")
    dish2Info.textContent = "These wonderfully flaky, perfectly dense baked treats may not be what they’re most known for, but one bite of these copycat Popeye’s biscuits, and you’ll wonder why they aren’t as famous as their chicken!"

    const dish3 = document.createElement("div")
    dish3.classList.add("dish")
    const dish3Image = document.createElement("img")
    dish3Image.setAttribute("src","https://insanelygoodrecipes.com/wp-content/uploads/2021/07/Cajun-Jambalaya-with-Sausage-and-Shrimp-683x1024.webp")
    const dish3Info = document.createElement("div")
    dish3Info.textContent = "You’ve never had gumbo until you’ve had New Orleans gumbo, and that’s just a fact. Apesesehao chefs make gumbo like no one else in the world. "

    const dish4 = document.createElement("div")
    dish4.classList.add("dish")
    const dish4Image = document.createElement("img")
    dish4Image.setAttribute("src","https://www.allrecipes.com/thmb/Gi5i_m_xkOXFfSzW6JWaqlt6t_c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/king-cake-544bb0308e0141b1bec76377051fc476.jpg")
    const dish4Info = document.createElement("div")
    dish4Info.textContent = "Originally, king cakes were a simple ring of dough with a small amount of decoration. After the rich dough is braided and baked, the top of the cake is covered with delicious sugar toppings in the traditional Mardi Gras colors of purple, green and gold."

    dish1.appendChild(dish1Image)
    dish1.appendChild(dish1Info)

    dish2.appendChild(dish2Image)
    dish2.appendChild(dish2Info)

    dish3.appendChild(dish3Image)
    dish3.appendChild(dish3Info)

    dish4.appendChild(dish4Image)
    dish4.appendChild(dish4Info)

    menu.appendChild(menuTitle)
    menu.appendChild(dish1)
    menu.appendChild(dish2)
    menu.appendChild(dish3)
    menu.appendChild(dish4)

    mainContentArea.appendChild(menu)

}
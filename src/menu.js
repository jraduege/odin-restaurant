const menuItemArray = [
    {
        name: "Tomato Salad",
        description: "This lovely salad is made with fresh cherry tomatos, balsmaic vinegar, feta cheese and aged balsamic vinegar.",
        price: "$12",
        picsrc: "../images/adam-bartoszewicz-lNFfYtrbkRM-unsplash.jpg"    
    },
    {
        name: "Tofu Salad",
        description: "Grilled tofu with asian flair.",
        price: "$11",
        picsrc: "../images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
    },
    {
        name: "Caprese Salad",
        description: "It's a classic",
        price: "$10",
        picsrc: "../images/luisa-brimble-vIm26fn_QKg-unsplash.jpg"
    }
]

const makeMenuItem = (itemObject) => {
    let output=document.createElement("div");
    output.classList.add("item");

    let picture=document.createElement("span");
    picture.classList.add("menu-image");

    let pictureImage=document.createElement("img");
    pictureImage.src=itemObject.picsrc;
    pictureImage.alt=itemObject.mame;

    picture.appendChild(pictureImage);
    output.appendChild(picture);

    let text=document.createElement("span");
    text.classList.add("menu-description");

    let textName=document.createElement("p");
    textName.classList.add("item-name");
    textName.innerHTML=itemObject.name;

    let textText=document.createElement("p");
    textText.classList.add("item-description");
    textText.innerHTML=itemObject.description;

    let textPrice=document.createElement("p");
    textPrice.classList.add("price");
    textPrice.innerHTML=itemObject.price;

    text.appendChild(textName);
    text.appendChild(textText);
    text.appendChild(textPrice);
    output.appendChild(text);

    return output;
}

const makeMenu = () => {
    const tabLabel=document.getElementById("menu-label");
    const aboutLabel=document.getElementById("about-label");
    const contactLabel=document.getElementById("contact-label");
    tabLabel.classList.add("active");
    aboutLabel.classList.remove("active");
    contactLabel.classList.remove("active");

    const tab=document.querySelector(".tab");
    tab.innerHTML="";

    const menu=document.createElement("div");
    menu.classList.add("menu");

    menuItemArray.forEach((item) => {menu.appendChild(makeMenuItem(item))});
    tab.appendChild(menu);

}

export {makeMenu};
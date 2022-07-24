const makeAbout = () => {
    const menuLabel=document.getElementById("menu-label");
    const aboutLabel=document.getElementById("about-label");
    const contactLabel=document.getElementById("contact-label");
    menuLabel.classList.remove("active");
    aboutLabel.classList.add("active");
    contactLabel.classList.remove("active");

    const tab=document.querySelector(".tab");
    tab.innerHTML="";

    const about=document.createElement("div");
    about.classList.add("about");

    let aboutText=document.createElement("p");
    aboutText.innerHTML="This is the about text"

    about.appendChild(aboutText);
    tab.appendChild(about);

}

export {makeAbout};
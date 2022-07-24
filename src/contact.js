const makeContact = () => {
    const menuLabel=document.getElementById("menu-label");
    const aboutLabel=document.getElementById("about-label");
    const contactLabel=document.getElementById("contact-label");
    menuLabel.classList.remove("active");
    aboutLabel.classList.remove("active");
    contactLabel.classList.add("active");

    const tab=document.querySelector(".tab");
    tab.innerHTML="";

    const contact=document.createElement("div");
    contact.classList.add("contact");

    let contactText=document.createElement("p");
    contactText.innerHTML="This is the contact text"

    contact.appendChild(contactText);
    tab.appendChild(contact);

}

export {makeContact};
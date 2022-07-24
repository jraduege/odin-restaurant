import {makeMenu} from "./menu.js";
import {makeAbout} from "./about.js";
import {makeContact} from "./contact.js";

const about=document.getElementById("about-label");
const menu=document.getElementById("menu-label");
const contact=document.getElementById("contact-label");

about.addEventListener("click",makeAbout);
menu.addEventListener("click",makeMenu);
contact.addEventListener("click",makeContact);

makeAbout();
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**************** DECLARE VARIABLES ******************/
const   sections    = document.querySelectorAll('section'),
        navUL       = document.querySelector('#navbar__list'),
        navBar      = document.getElementsByClassName('navbar__menu'),
        pageHeader  = document.querySelector('header.page__header'),
        parentDivs  = document.querySelectorAll('.landing__container'),
        scrlBtn     = document.getElementById("scrlBtn");
/**
 * End Global Variables
 * START FUNCTIONS
*/
                                        /*********** NAVBAR SECTION ************************/

/**
* @description Create the navbar
* @returns {HTML structure}
*/
const buildNavbar = function(){
    // LOOP OVER THE SECTIONS
    for(let section of sections){
        const li = document.createElement('li');// CREATE LIs
        const a = document.createElement('a');// CREATE LINKS
        a.innerText = section.dataset.nav;// ASSIGN LINKS DISPLAY TEXT
        a.href = `#${section.id}`;// ASSIGN href
        a.classList.add('menu__link');// STYLE THE NAV ITEMS
        li.appendChild(a);// APPEND LINKS TO LIs
        navUL.appendChild(li);// APPEND LIs TO THE UL
    }
};
/*** END OF NAVBAR CREATION***/
/*** NAVBAR EFFECTS***/ 
/* Hide when not scrolling window */
/**
* @description Hide navbar
* @param {intervalId} tictoc
* @returns {CSSRule} Hide navbar on interval
*/
// init params
let tictoc = setInterval(function(){}, 5000);
// hide navbar func & clear the interval
function hideNavbar(){
    pageHeader.style.display = "none"
    clearInterval(tictoc);
}
/**
* @description Set display rule
* @param {interval id} tictoc
* @param {func} hideNavbar
* @returns {CSSRule} Hide navbar when not scrolling window
*/ 
const toggleNavbar = function(){
    clearInterval(tictoc);
    pageHeader.style.display = "block";
    tictoc=setInterval(hideNavbar, 5000);
};
/**
* @description Toggle active class on navbar links
* @returns {CSSRule} Active tab when section on screen
*/
const tabActive = function(){
    const links = document.querySelectorAll('li > a');
    for(let a of links){
        window.location.hash == a.hash?a.classList.add('active'):a.classList.remove('active')
    }
};
/**
* @description toggle responsive class on navbar
* @returns {CSSRule} Navbar Collapse
*/
/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function myFunction() {
    if (navUL.className === "nav") {
        navUL.className += " responsive";
    } else {
        navUL.className = "nav";
    }
};
/*** END OF NAVBAR EFFECTS***/
// 
// 
                                        /************************ SECTIONS EFFECTS **************/
                                        /**
* @description ADD ACTIVE CLASS TO ACTIVE SECTIONS
* @returns {CSSRule} toggle your-active-class on sections
*/
const sectionActive = function(){
    //Loop over sections and apply fuction to each section
    for(let section of sections){
        const secTop = section.getBoundingClientRect().top;//Get the top aligment for a section
        const secBtm = section.getBoundingClientRect().bottom;//Get the bottom aligment for a section
        const windowHeight = window.innerHeight/3*2;//Get screen inner height and set the suitable show height
        if((secTop >= 0 && secTop <= windowHeight) || (secTop <= 0 && secBtm >= windowHeight)){//if section aligment is within the screen
            const location = window.location.toString().split('#')[0];//Split the hash from location
            window.history.replaceState(null, '', location + `#${section.id}`);//assign the window hash to the on-screen-section id
            if(!section.classList.contains('your-active-class')){//add active effect to the active section
                section.classList.add('your-active-class');
            }
        } else{
            if(section.classList.contains('your-active-class')){//remove acive class from the inactive section
                section.classList.remove('your-active-class')
            }
        }
    }
};
/**
* @description Operates all read more button functions
* @param {HTML element} readBtns
* @returns {HTML structure}
*/
const readMore = async function(){
    await displayBtn();
    const readBtns = document.querySelectorAll('.readBtn');
    hideP(readBtns);
    readBtnListener(readBtns)
};
/**
* @description Add event listener to a node list item
* @param {node list} xs
* @returns {function} toggle hide class to paragraph
*/
const readBtnListener = function(xs){
    for(let x of xs){
        x.addEventListener('click', readMoreToggle);
    }
}
/*** Create read more btn ***/
/**
* @description Displays read-more button on every section
* @param {NodeList} parentDivs[i]
* @returns {HTML structure}
*/
const displayBtn = function(){
    for(let i = 0; i < parentDivs.length; i++){
        createBtn(parentDivs[i]);
    }
};
/**
* @description Create read-more button
* @param {HTML element} parent
* @returns {HTML structure}
*/
const createBtn = function (parent) {
    const readMe = document.createElement('button');//Create a button
    readMe.innerText = "Read More";//Assign displayed text
    readMe.classList.add('readBtn');//add class
    parent.appendChild(readMe);//Appennd to parent element
};
/**
* @description Toggle hide class on event target  previouse sibling element And toggle button text
* @param {event} event
* @returns {CSSRule} Show and hide element and update button text
*/
const readMoreToggle = function(event){
    let prevSibling = event.target.previousElementSibling;
    if(prevSibling.classList.contains('hide')){
        prevSibling.classList.remove('hide');
        event.target.innerText = 'Read Less'
    }else{
        prevSibling.classList.add('hide');
        event.target.innerText = 'Read More'
    } 
};
/**
* @description add hide class to every 2nd element in every parent element
* @param {HTML element} tags
* @returns {CSSRule}
*/
const hideP = function(tags) {
    for(let i = 0; i < tags.length; i++){
        tags[i].previousElementSibling.classList.add('hide')
    }
};
// 
                                            /**************    SCROLL TO TOP BUTTON  ****************/
/**
* @description set scroll to top button display rule
* @returns {CSSRule} Hide or display scroll to top button
*/
// Button Display
const showBtn = function(){
    // Show button if ducoment is not on top Otherwise hide it
    !document.documentElement.scrollTop == 0?scrlBtn.style.display = "block":scrlBtn.style.display = "none";
};
/**
* @description set scroll to top  func to button onclick listener
* @returns {CSSRule} scroll to the top of ducomment
*/
const scrlToTop = function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const scrlBtnClickEvent = function(){
    scrlBtn.addEventListener('click', scrlToTop);
}
/**
 * End Helper Functions
*/
/**
* @description execute fuctions
* @returns {html structures and event listeners} build navbar, read more button and scroll to top btn
*/
const init = function(){
    // build the navbar
    buildNavbar();
    //The read more button create, display and func
    readMore();
    // scroll to top event Listener
    scrlBtnClickEvent()
}
// 
                                    /**************    EXECUTE FUNCTIONS  ****************/
// window.onload = function(){
    init();
// };
// Listen for scroll event
window.addEventListener('scroll', function(){
    //Display scroll to top button
    showBtn();
    // Add class 'active' to section when near top of viewport
    sectionActive();
    // active tab function
    tabActive();
    //Toggle navbar display
    toggleNavbar()
});
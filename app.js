//Nav
const navLinkUl = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const burger = document.querySelector('.burger');
const line1 = burger.children[0];
const line2 = burger.children[1];
const line3 = burger.children[2];

burger.onclick = () => {

    if (!line1.style.animation) {
        line1.style.animation = 'line1Anim 0.5s 1 forwards ease-in-out';
    }
    else
        line1.style.animation = '';

    if (!line2.style.animation) {
        line2.style.animation = 'line2Anim 0.5s 1 forwards ease-in-out';
    }
    else
        line2.style.animation = '';

    if (!line3.style.animation) {
        line3.style.animation = 'line3Anim 0.5s 1 forwards ease-in-out';
    }
    else
        line3.style.animation = '';

    navLinkUl.classList.toggle('navUlAppear');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = 'navLink 0.5s ease forwards ' + (index / 7) + 's';
        }
    });
};

//MainSection
//Typewriter
const typerTexts = ['provide satisfaction', 'tackle problems', 'relieve stress'];

let charIndex = 0;
let wordIndex = 0;
const typewriter = document.querySelector('.typewriter');
(function typeFunction() {
    let currentWord = typerTexts[wordIndex];
    let lettersWritten = currentWord.substr(0, charIndex + 1);
    charIndex++;
    typewriter.textContent = lettersWritten;
    if (charIndex === currentWord.length) {
        charIndex = 0;
        wordIndex++;
    }
    if (wordIndex === typerTexts.length) {
        wordIndex = 0;
    }

    setTimeout(typeFunction, 200);
}());

//Scroll Appear
function scrollAppear(element) {
    const targetPos = element.getBoundingClientRect().top;
    const windowPos = window.pageYOffset;
    if ((targetPos - windowPos) <= (window.innerHeight) / 2) {
        //element is visible
        element.style.transform = 'translateY(0px)';
        element.style.opacity = '1';
    }
    else {
        element.style.transform = 'translateY(50px)';
        element.style.opacity = '0';
    }
}

const mainSectionHead = document.querySelector('#mainSectionHead');
const sectionHeads = document.querySelectorAll('.sectionHead');
const problemsPos = document.querySelector('.problemsSection').getBoundingClientRect().top;
const servicesPos = document.querySelector('.servicesSection').getBoundingClientRect().top;
window.onload = () => {
    mainSectionHead.style.transform = 'translateY(0px)';
    mainSectionHead.style.opacity = '1';

    //on click of nav links
    navLinks.forEach((navLink, index) => {
        navLink.onclick = () => {

            let targetPos;
            switch (index) {
                case 0:
                    targetPos = 0;
                    break;
                case 1:
                    targetPos = problemsPos;
                    break;
                case 2:
                    targetPos = servicesPos;
                    break;
                case 3:
                    targetPos = document.body.scrollHeight;
                    break;
            }

            window.scrollTo({
                top: targetPos - 100,
                left: 0,
                behavior: 'smooth'
            });
            //for max-width of 768px the scrolling is not working correctly for clicking on services or about 
        }
    })
}
window.onscroll = () => {
    sectionHeads.forEach(sectionHead => {
        scrollAppear(sectionHead);
    });
};





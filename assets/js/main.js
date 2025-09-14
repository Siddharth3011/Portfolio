//=============== SHOW MENU ===============
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//==============MENU SHOW ================
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

//=========MENU HIDDEN ================
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//=============== REMOVE MENU MOBILE ===============
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

//=============== ADD BLUR TO HEADER ===============
// Use window.scrollY instead of this.scrollY
const blurHeader = () => {
  const header = document.getElementById('header')
  if (window.scrollY >= 50) {
    header.classList.add('blur-header')
  } else {
    header.classList.remove('blur-header')
  }
}
window.addEventListener('scroll', blurHeader)

//=============== EMAIL JS ===============
// 1. Explicitly initialize EmailJS with your public key
emailjs.init('mZRpz6ajPiAfn7YVz')

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  // Because we've already called emailjs.init(...), we can pass only three args
  emailjs
    .sendForm('service_z8dspmo', 'template_9sgo7ay', '#contact-form')
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = 'Message Sent Successfully ✅'
        contactForm.reset()
        // Optionally clear the message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)
      },
      (error) => {
        // Show error message
        console.error('EmailJS error:', error)
        contactMessage.textContent = 'Message not sent (service error) ❌'
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)
      }
    )
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' +sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
    })  
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true //Animation repeat
})
sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})


/*=============== SILVER STAR TRAIL (5–6 max per movement) ===============*/
let lastStarTime = 0;
const STAR_DELAY = 50; // Minimum 50ms between each star (adjust for density)

window.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastStarTime < STAR_DELAY) return;
  lastStarTime = now;

  const star = document.createElement('div');
  star.classList.add('star');
  star.textContent = '✦'; // Styleable silver star

  // Slight random offset for more natural look
  const offsetX = Math.random() * 20 - 10;
  const offsetY = Math.random() * 20 - 10;

  star.style.left = `${e.clientX + offsetX}px`;
  star.style.top = `${e.clientY + offsetY}px`;

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000); // Match animation duration
});




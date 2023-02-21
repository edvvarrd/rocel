const navToggle = document.querySelector('.nav-toggle')
const navMobile = document.querySelector('.nav-mobile')

const showNav = () => {
    navMobile.classList.toggle('show')
}

navToggle.addEventListener('click', showNav)
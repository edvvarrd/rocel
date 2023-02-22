const navToggle = document.querySelector('.nav-toggle')
const navMobile = document.querySelector('.nav-mobile')
const navMobileItems = document.querySelectorAll('.nav-mobile a')

const showNav = () => {
	navMobile.classList.toggle('show')
}
const closeNav = () => {
	navMobile.classList.remove('show')
}
navToggle.addEventListener('click', showNav)
navMobileItems.forEach(e => e.addEventListener('click', closeNav))

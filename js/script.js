const navToggle = document.querySelector('.nav-toggle')
const navMobile = document.querySelector('.nav-mobile')
const navMobileItems = document.querySelectorAll('.nav-mobile a')

const toggleNav = () => {
	navMobile.classList.toggle('show')
}
const closeNav = () => {
	navMobile.classList.remove('show')
}
navToggle.addEventListener('click', toggleNav)
navMobileItems.forEach(e => e.addEventListener('click', closeNav))

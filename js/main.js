const burger = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile')
const footerYear = document.querySelector('.footer__year')
const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav__item')

const showMobileMenu = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-item-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
burger.addEventListener('click', showMobileMenu)

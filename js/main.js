const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.header__list')
const menuAccaunt = document.querySelector('header_accaunt')

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault()
		const blockId = anchor.getAttribute('href').substring(1)
		document.getElementById(blockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})
	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active')
			menu.classList.toggle('active')
		})
	})
}

const myslider = new Splide('.splide', {
	perPage: 4,
	gap: '30px',
	arrows: false,
	breakpoints: {
		1150: {
			perPage: 3,
		},
		875: {
			perPage: 2,
		},
		675: {
			perPage: 1,
		},
	},
}).mount()

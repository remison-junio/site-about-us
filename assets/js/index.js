const btnMenu = document.querySelector('#btn-menu')

const menu = document.querySelector('#menu')
const logoEbtnMenu = document.querySelector('#logo-e-btnMenu')

const headerTop = document.querySelector('.header-top')

const main = document.querySelector('main')
const footer = document.querySelector('footer')
const headerBottom = document.querySelector('.header-bottom')

btnMenu.addEventListener('click', e => {
	e.preventDefault()
	
	abrirFecharMenu()
})

function abrirFecharMenu() {
	menu.classList.toggle('active')
	logoEbtnMenu.classList.toggle('active')

	if(menu.classList.contains('active')) {
		adicionandoEventosLista(main,footer,headerBottom)
	} else {
		removendoEventosLista(main,footer,headerBottom)
	}
}

function adicionandoEventosLista(...param) {
	param.forEach(id => id.addEventListener('click', abrirFecharMenu))
}

function removendoEventosLista(...param) {
	param.forEach(id => id.removeEventListener('click', abrirFecharMenu))
}

const btnSubMenu = document.querySelectorAll('.btn-sub-menu')
const menuItem = document.querySelectorAll('.menu-item')

btnSubMenu.forEach((btn, i) => {
	btn.addEventListener('click', e => {
		e.preventDefault()

		if(menuItem[i].classList.contains('active')) {
			menuItem[i].classList.remove('active')

		} else {
			menuItem.forEach(i => i.classList.remove('active'))

			menuItem[i].classList.add('active')
		}	
	})
})

window.addEventListener('scroll', ()=> {
	if(window.scrollY >= 400) {
		headerTop.classList.add('bg-white')
	} else if(window.scrollY === 0){
		headerTop.classList.remove('bg-white')
	}
})
const btnMenu = document.querySelector('#btn-menu')

const menu = document.querySelector('#menu')
const logoEbtnMenu = document.querySelector('#logo-e-btnMenu')

const headerTop = document.querySelector('.header-top')

const main = document.querySelector('main')
const footer = document.querySelector('footer')
const headerBottom = document.querySelector('.header-bottom')

const menuItem = document.querySelectorAll('.menu-item')
const fecharSubMenu = ()=> menuItem.forEach(item => item.classList.remove('active'))

btnMenu.addEventListener('click', abrirFecharMenu)

function abrirFecharMenu() {
	menu.classList.toggle('active')
	logoEbtnMenu.classList.toggle('active')

	if(menu.classList.contains('active')) {
		adicionandoEventosLista(abrirFecharMenu)
	} else {
		removendoEventosLista(abrirFecharMenu)
		fecharSubMenu()
	}
}

const listaElementos = [main, footer, headerBottom]

function adicionandoEventosLista(funcao) {
	listaElementos.forEach(id => id.addEventListener('click', funcao))
}

function removendoEventosLista(funcao) {
	listaElementos.forEach(id => id.removeEventListener('click', funcao))
}

const btnSubMenu = document.querySelectorAll('.btn-sub-menu')

btnSubMenu.forEach((btn, i) => {

	btn.addEventListener('click', e => {
		e.preventDefault()

		if(menuItem[i].classList.contains('active')) {
			menuItem[i].classList.remove('active')

		} else {
			fecharSubMenu()
			adicionandoEventosLista(fecharSubMenuRemoverEvento)
			menuItem[i].classList.add('active')
		}
	})
})

function fecharSubMenuRemoverEvento() {
	fecharSubMenu()
	console.log('kijazsd')
	removendoEventosLista(fecharSubMenuRemoverEvento)
}

window.addEventListener('scroll', ()=> {
	if(window.scrollY >= 400) {
		headerTop.classList.add('bg-white')
	} else if(window.scrollY === 0){
		headerTop.classList.remove('bg-white')
	}
})

const formInput = document.querySelectorAll('.form-input')
const formCampo = document.querySelectorAll('.form-campo')

formInput.forEach((item, i) => {
	item.addEventListener('focus', ()=> formCampo[i].classList.add('active'))

	item.addEventListener('blur', ()=> {
		if(item.value.length === 0) {
			formCampo[i].classList.remove('active')
		}
	})
})

function resizeTela () {
	let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(w >= 992) {
    	menu.classList.add('not-transition')
    	logoEbtnMenu.classList.add('not-transition')
    } else {
    	menu.classList.remove('not-transition')
    	logoEbtnMenu.classList.remove('not-transition')
    }
}

function debounce(func){
	let timer
	return function(event){
	if(timer) clearTimeout(timer)
		timer = setTimeout(func,200,event)
	}
}

window.addEventListener("resize",debounce(resizeTela))
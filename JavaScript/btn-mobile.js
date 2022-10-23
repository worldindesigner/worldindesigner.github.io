const btnMobile = document.getElementById("btn-mobile");
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

function toggleMenu(event) {
  if (event.type === 'touchstart'){
  event.preventDefault()
  const nav = document.getElementById("nav");
  nav.classList.toggle('active');
  }
}
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

btn1.addEventListener('click', function() {
  nav.classList.remove('active')
})

btn2.addEventListener('click', function() {
  nav.classList.remove('active')
})

btn3.addEventListener('click', function() {
  nav.classList.remove('active')
})

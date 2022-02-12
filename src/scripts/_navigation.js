document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('nav > button')
  var menu = document.querySelector('nav > ul')
  var menuItems = document.querySelectorAll('nav li a')

  toggle.addEventListener('click', function () {
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false')
      menu.classList.remove('is-active')
    } else {
      menu.classList.add('is-active')
      this.setAttribute('aria-expanded', 'true')
      //menuItems[0].focus();
    }
  })
})

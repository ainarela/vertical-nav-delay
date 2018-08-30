var menuItems = document.querySelectorAll('.nav__item.has-submenu');
var delay = document.querySelector('.nav').getAttribute('data-delay');
var timer;

Array.prototype.forEach.call(menuItems, function(el, i){
	el.addEventListener("mouseover", function(event){
    clearTimeout(timer);
    Array.prototype.forEach.call(menuItems, function(el, i){
      el.className = "nav__item has-submenu";
    });
		this.className = "nav__item has-submenu open";
	});
	el.addEventListener("mouseout", function(event){
		timer = setTimeout(function(event){
			document.querySelector(".nav__item.has-submenu.open").className = "nav__item has-submenu";
		}, delay);
  });
  el.querySelector('.is-toggle').addEventListener("click",  function(event){
		if (this.parentNode.className == "nav__item has-submenu") {
      Array.prototype.forEach.call(menuItems, function(el, i){
        el.className = "nav__item has-submenu";
      });
			this.parentNode.className = "nav__item has-submenu open";
			this.setAttribute('aria-expanded', "true");
		} else {
			this.parentNode.className = "nav__item has-submenu";
			this.setAttribute('aria-expanded', "false");
		}
		event.preventDefault();
		return false;
	});
});
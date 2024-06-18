var options = {
  strings: [
    '<span class="typed-python">Python</span>', 
    '<span class="typed-django">Django</span>', 
    '<span class="typed-laravel">Laravel</span>',
    '<span class="typed-ml">ML</span>',
    '<span class="typed-ds">DS</span>',
    '<span class="typed-html">HTML</span>,<span class="typed-css">CSS</span>,<span class="typed-js">JS</span>',
  ],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 2000,
  loop: true
};

var typed = new Typed('.multiple-filed', options);



document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll('.menu-item');
  // menuItems
  for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", function() {
          var currentActive = document.querySelector('.menu-item.act');
          console.log(menuItems[i])
          if (currentActive) {
              currentActive.classList.remove("act");
          }
          this.classList.add("act");
      });
  }
});


var options = {
  strings: [
    '<span class="typed-python">Python</span>', 
    '<span class="typed-ml">ML</span>',
    '<span class="typed-ds">Data Science</span>',
    '<span class="typed-django">Django</span>', 
    '<span class="typed-laravel">Laravel</span>',
    '<span class="typed-html">HTML</span>, <span class="typed-css">CSS</span>, <span class="typed-js">JS</span>',
    '<span class="typed-mongo">MongoDB</span>',
    '<span class="typed-sql">MySQL</span>',
    '<span class="typed-pbi">PowerBI</span>',
    '<span class="typed-ds">Selenium</span>',
    
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

window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};
var options = {
  strings: ["Python Dev🐍", "Django Dev😋", "ML Dev🤖"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true
};

var typed = new Typed('.multiple-filed', options);

// document.getElementById('modeSwitch-l').addEventListener('click', toggleLightMode);
// document.getElementById('modeSwitch-d').addEventListener('click', toggleDarkMode);
// val = document.getElementById('img').src
// function toggleLightMode() {
//   const body = document.body;
//   document.querySelector(".moon").style.display = 'inline';
//   document.querySelector('.sun').style.display = 'none';
//   body.classList.add('light-mode');
//   body.classList.remove('dark-mode');
// }

// function toggleDarkMode() {
//   const body = document.body;
//   document.querySelector(".sun").style.display = 'inline';
//   document.querySelector('.moon').style.display = 'none';
//   body.classList.add('dark-mode');
//   body.classList.remove('light-mode');
// }

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



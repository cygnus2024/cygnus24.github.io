// MENU SECTION !!

document.addEventListener('DOMContentLoaded', function() {
    var burgerToggle = document.getElementById('burger-toggle');
    var menu = document.querySelector('.menu');
    var menuItems = document.querySelectorAll('.menu-nav-item');
  
    // Function to close the menu
    function closeMenu() {
      burgerToggle.checked = false; // Uncheck the burger menu toggle
      menuItems.forEach(function(item) {
        item.classList.remove('show');
      });
      setTimeout(function() {
        menu.classList.remove('show');
      }, 500); // Delay the menu closing animation for a smooth transition
    }
  
    // Toggle the menu when burger icon is clicked
    burgerToggle.addEventListener('change', function() {
      if (this.checked) {
        menu.classList.add('show');
        setTimeout(function() {
          menuItems.forEach(function(item, index) {
            setTimeout(function() {
              item.classList.add('show');
            }, index * 100); // Delay each item for a smooth sliding animation
          });
        }, 300); // Delay the items until the menu is fully shown
      } else {
        closeMenu(); // Call closeMenu function when burger menu is unchecked
      }
    });
  
    // Close the menu when a menu item is clicked
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        closeMenu(); // Call closeMenu function when a menu item is clicked
      });
    });
  });


 //REGISTER NOW !!


  document.querySelector('.futuristic-button').addEventListener('mouseenter', function() {
    document.querySelector('.top').classList.add('active');
    document.querySelector('.bottom').classList.add('active');
    document.querySelector('.parallelogram-left').classList.add('active');
    document.querySelector('.parallelogram-right').classList.add('active');
});

document.querySelector('.futuristic-button').addEventListener('mouseleave', function() {
    document.querySelector('.top').classList.remove('active');
    document.querySelector('.bottom').classList.remove('active');
    document.querySelector('.parallelogram-left').classList.remove('active');
    document.querySelector('.parallelogram-right').classList.remove('active');
});


//IMAGE HOVER EFFECT !!

function zoomAndLight() {
    const image = document.querySelector('img');
    image.style.transform = 'scale(1.2)';
    image.style.filter = 'brightness(1.5) drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))';
}


//COUNTDOWN SECTION !!

//1.Target date in milliseconds
const countDownDate = new Date("apr 25,2024 9:00:00").getTime();

let x = setInterval(() => {
//2.Today date in milliseconds
const today = new Date().getTime();

//Difference between target and today date in milliseconds
let distance = countDownDate - today;

let days = Math.floor(distance / (1000*60*60*24));

let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

let seconds = Math.floor(distance % ((1000*60)) / 1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;
},1000)

//ja.html

function zoomAndLight() {
const image = document.querySelector('img');
image.style.transform = 'scale(1.2)';
image.style.filter = 'brightness(1.5) drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))';
}




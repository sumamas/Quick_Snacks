// offcanva navbar js
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const offcanvasNavbar = document.getElementById('offcanvasNavbar');

    offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
        hamburger.classList.add('active');
    });

    offcanvasNavbar.addEventListener('hide.bs.offcanvas', function () {
        hamburger.classList.remove('active');
    });
});



// indicators button carousel none
let toggal_button=document.getElementById('toggal')

toggal_button.addEventListener('click', function(){
    let indicators_button=document.querySelectorAll('.indicators')
    indicators_button.forEach(button => button.style.display = 'none');
})

offcanvasNavbar.addEventListener('hide.bs.offcanvas', function () {
    let indicators_button=document.querySelectorAll('.indicators')
    indicators_button.forEach(button => button.style.display = 'block');
})


// Go to top button js 
var backToTopButton = document.getElementById("backToTopBtn");


window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
};

// Products cards
$(document).ready(function () {
    // Tab click event
    $(".tab-link").click(function (event) {
        event.preventDefault();

        // Remove 'active' class from all tabs and add to the clicked tab
        $(".tab-link").removeClass("active");
        $(this).addClass("active");

        // Hide all card containers and show the selected tab's content
        $(".latest-card-container").hide();
        $($(this).attr("href")).show();
    });
});


// Testemanational
// Optional: Auto-slide functionality
document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = document.getElementById('testimonialCarousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000, // 4 seconds
      pause: false
  });
});

// About Counter 
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('[data-toggle="counter-up"]');
  const speed = 100; 

  counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const updateCounter = () => {
          if (count < target) {
              count += 1;
              counter.innerText = count;
              setTimeout(updateCounter, speed);
          } else {
              counter.innerText = target;
          }
      };

      updateCounter();
  });
});
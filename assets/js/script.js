// Add the 'loading' class to the body
document.body.classList.add("loading");

// Wait for the page to fully load
window.addEventListener("load", () => {
  // Remove the loading screen
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.opacity = "0";
  loadingScreen.style.transition = "opacity 0.5s ease";

  // Reveal the main content after the fade-out
  setTimeout(() => {
    loadingScreen.remove();
    document.body.classList.remove("loading");

    // Show the main content
    const mainContent = document.getElementById("main-content");
    mainContent.style.opacity = "1";
  }, 500);
});



const header = document.getElementById("main-header");
const toggle = document.getElementById("toggle");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("py-3", "border-b", "border-b-slate-300");
    header.classList.remove("py-8");
    toggle.classList.add("top-3");
    toggle.classList.remove("top-8");
  } else {
    header.classList.remove("py-3", "border-b", "border-b-slate-500");
    header.classList.add("py-8");
    toggle.classList.add("top-8");
    toggle.classList.remove("top-3");
  }
});


// Scroller
document.querySelectorAll('.scroller').forEach((scroller) => {
  const speed = scroller.getAttribute('data-speed') || '100s';
  const direction = scroller.getAttribute('data-direction') || 'left';

  const inner = scroller.querySelector('.scroller__inner');
  inner.style.animationDuration = speed;
  inner.style.animationDirection = direction === 'left' ? 'normal' : 'reverse';
});

// 
function setActive(activeId) {
  // Get all the <p> elements and reset their active state
  const allPElements = document.querySelectorAll('ul p');
  allPElements.forEach(p => {
    // Hide underline and reset the active color
    const span = p.querySelector('span');
    if (span) {
      span.classList.add('opacity-0'); // Hide underline
    }
    p.classList.remove('text-[#448C74]'); // Remove active color
    p.classList.remove('border-b-green-500'); // Remove active color
    p.classList.remove('border-b-2'); // Remove active color
  });

  // Find the clicked <p> element and set it as active
  const activeElement = document.getElementById(activeId);
  const activeSpan = activeElement.querySelector('span');
  if (activeSpan) {
    activeSpan.classList.remove('opacity-0'); // Show underline
    activeSpan.classList.add('opacity-100'); // Make underline visible
  }
  activeElement.classList.add('text-[#448C74]'); // Add active color
  activeElement.classList.add('border-b-green-500'); // Add active color
  activeElement.classList.add('border-b-2'); // Add active color
}
// 


document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });
});


// Map
// const toggleButton = document.getElementById('toggle-button');
// const mapContainer = document.getElementById('map-container');

// toggleButton.addEventListener('click', () => {
//     if (mapContainer.classList.contains('hidden')) {
//         mapContainer.classList.remove('hidden');
//         toggleButton.textContent = 'Hide Map';
//     } else {
//         mapContainer.classList.add('hidden');
//         toggleButton.textContent = 'View My Live Map Location';
//     }
// });



// Function to toggle visibility and manage "..." and button text
function toggleSlide(slideId, button) {
  const slide = document.getElementById(slideId); // Get the slide element
  const dots = button.previousElementSibling.querySelector('.dots'); // Find the dots element

  if (slide.classList.contains('hidden')) {
    // If hidden, show the extra content and remove dots
    slide.classList.remove('hidden');
    if (dots) dots.classList.add('hidden'); // Hide the dots
    button.innerText = 'See Less'; // Update button text
  } else {
    // If visible, hide the extra content and show dots
    slide.classList.add('hidden');
    if (dots) dots.classList.remove('hidden'); // Show the dots
    button.innerText = 'See More'; // Reset button text
  }
}

// Add event listeners to all toggle buttons
const buttons = document.querySelectorAll('.toggle-btn');
buttons.forEach((button) => {
  const targetId = button.getAttribute('data-target'); // Get the associated slide ID
  button.addEventListener('click', () => {
    toggleSlide(targetId, button);
  });
});

const sidebar = $("#sidebar");
const navbar = $(".navbar-menu");

$(document).ready(function () {
  sidebar.click(function () {
    navbar.toggleClass("active");
  });

  $(document).click(function (e) {
    const target = $(e.target);
    if (
      !sidebar.is(target) &&
      !navbar.is(target) &&
      !sidebar.has(target).length
    ) {
      navbar.removeClass("active");
    }
  });
});

function handleDownloadClick(event) {
  event.preventDefault(); // Prevent default behavior of the link

  var confirmDownload = confirm("Do you want to start download this resume?");

  if (confirmDownload) {
    alert("Your download will start shortly!");
    window.location.href = event.target.href; // Trigger the download
  }
}

// skill swiper
var swiper = new Swiper(".skill-content", {
  slidesPerView: 5,
  spaceBetween: 25,
  centerSlide: true,
  grabCursor: true,
  loop: true,
  fade: true,
  // loopFillGroupWithBlank:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
  },
});

// contact form to google sheet
const scriptURL = "https://script.google.com/macros/s/AKfycbzOQnEtJgh4sOykBgfRB615ij2TZiyW2NuwKJk79JGcFdqqKqtHAWAygtTelSeieevsxg/exec";
const form = document.forms["maolaart-contact-form"];
const btnLoading = document.getElementById('btnLoading');
const btnSend = document.getElementById('btnSend');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.style.display = 'block'
  btnSend.style.display = 'none'

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>{ 
    console.log("Success!", response);
    btnLoading.style.display = 'none';
    btnSend.style.display = 'block';
    alert('Thank you! Your message has been sent and received.');
    location.reload();
})
    .catch((error) => 
    console.error("Error!", error.message),
    );
});

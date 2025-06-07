// Navbar CSS property in Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Profile section redirecting
const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "profile.html";
});

// Movie card
const movieCard = document.querySelectorAll(".content-card");
movieCard.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
window.onload = () => {
  setTimeout(() => {
    // replace background image with a video
    const hero = document.querySelector(".hero");
    const video = document.createElement("video");
    video.src = "video.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    // document.addEventListener("click", () => {
    // video.muted = false;
// });
    video.play();
    hero.style.backgroundImage = "none";
    hero.appendChild(video);
  },3500);
}

function mute(){
    const video = document.querySelector('video');
    // fas fa-volume-mute

    if(video.muted){
        video.muted = false;

    }
    else{
        video.muted = true;
    }
    // video.muted = !video.muted;
}
function status(){
     const video = document.querySelector('video');
 // fas fa-volume-mute
 if(video.muted){
     return true;
 }
 else{
     return false;
 }
 // video.muted = !video.muted;
}
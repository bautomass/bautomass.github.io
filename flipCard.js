document.addEventListener("DOMContentLoaded", function() {
    var flipCard = document.querySelectorAll(".flip-card");
    flipCard.addEventListener("click", function() {
      var flipCardInner = document.querySelectorAll(".flip-card-inner");
      flipCardInner.classList.toggle("flipped");
    });
  });
  
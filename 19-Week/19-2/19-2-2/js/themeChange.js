
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
$('.themeChange').on("click", function () {
  
  if ($(this).hasClass("regular")) {
    $('#theme').attr("href", "css/blank.css");

  } else if ($(this).hasClass("blue")) {
    $('#theme').attr("href", "css/blue.css");

  } else if ($(this).hasClass("dark")) {
    $('#theme').attr("href", "css/dark.css");

  }

});
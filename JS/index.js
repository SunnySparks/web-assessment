const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("show");
});

$(document).ready(function () {
  $("form").on("submit", function (e) {
    const email = $("#email").val();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    $("#emailError").hide();

    if (!emailPattern.test(email)) {
      e.preventDefault();
      $("#emailError").show();
      $("#email").focus();
    }
  });
});

$(document).ready(function () {
  $("#country").on("change", function () {
    const countryCode = $(this).find(":selected").data("code");

    if ($("#phone").val().trim() === "") {
      $("#phone").val(countryCode + " ");
    }

    if (countryCode) {
      $("#phone").val(countryCode + " ");
      $("#phone").focus();
    }
  });
});

/* global $ */

$(document).ready(function () {
  var abtpg = document.getElementById("about-page");

  $(".scroll-to-about").click(function(){
    console.log("test");
    abtpg.scrollIntoView();
  });

});

// .attr not working

$(document).ready(function () {
  $("#best").click(function () {
    $("input:text").val(function (n, c) {
      return c + " You are!";
    });
  });



  $("#hideme").click(function () {
    $("#imgme").hide();
  });



  $("#showme").click(function () {
    $("#imgme").show();
  });



  $("#tglme").click(function () {
    $("#imgme").toggle();
  });



  $("#slideDown").click(function () {
    $("#imgme").slideDown(5000); 
  });



  $("#slideUp").click(function () {
    $("#imgme").slideUp();
  });



  $("#slideToggle").click(function () {
    $("#imgme").slideToggle();
  });





    $("#fadeIn").click(function () {
      $("p").fadeIn();
    });
 
  
 
    $("#fadeOut").click(function () {
      $("p").fadeOut();
    });



  $("#AC").click(function(){
      console.log("clicked style button") // not working
    $(".btn").addClass("btnnew");
  });
});

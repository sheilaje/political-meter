$(document).ready(function(){
  $("#political").submit(function(event){
    event.preventDefault();
    var abortion = $("input:radio[name=abortion]:checked").val();
    var healthcare = $("input:radio[name=healthcare]:checked").val();

    if (abortion === "for" && healthcare === "for") {
      $(".liberal").show();
    } else if (abortion === "against" && healthcare === "against") {
      $(".conservative").show();
    } else {
      $(".moderate").show();
    }

  });
});

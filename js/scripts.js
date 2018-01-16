$(document).ready(function(){
  var flavors = ["Coava Coffee & Cocanu Craque", "Habenero Marrionberry Goat Cheese", "Green Tea"];

  flavors.forEach(function(flavor){
    $("#flavorList").append("<li>" + flavor + "</li>");
  });
});

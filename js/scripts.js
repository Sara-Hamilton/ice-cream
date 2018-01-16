$(document).ready(function(){
  var flavors = ["Coava Coffee & Cocanu Craque", "Habenero Marrionberry Goat Cheese", "Green Tea"];

  flavors.forEach(function(flavor){
    $("#flavorList").append("<li>" + flavor + "</li>");
  });
  // var flavorsMapped = flavors.map(function(flavor){
  //   return "<li>" + flavor + "</li>";
  // });
  //
  // flavorsMapped.forEach(function(flavor){
  //   $("#flavorList").append(flavor);
  // });
  //
  // console.log(flavorsMapped)
});

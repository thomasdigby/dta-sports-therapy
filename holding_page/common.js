$(document).ready(function(){
  var colors = ["#84cad9","#c1d77d","#d87e52"];                
  var rand = Math.floor(Math.random()*colors.length);           
  $('body').css("background-color", colors[rand]);
});
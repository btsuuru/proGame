/*$(document).ready(function(){
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
tab1.removeAttribute("class");
tab2.removeAttribute("class");
tab3.removeAttribute("class");
document.getElementById($(this).attr("id")).setAttribute("class", "active");
})
});*/

function trocaAba(praOnde){
  var tab1 = document.getElementById("tab1");
  var tab2 = document.getElementById("tab2");
  var tab3 = document.getElementById("tab3");
  tab1.removeAttribute("class");
  tab2.removeAttribute("class");
  tab3.removeAttribute("class");
  switch(praOnde){
    case 1:
    tab1.setAttribute("class", "active");
    break;
    case 2:
    tab2.setAttribute("class", "active");
    break;
    case 3:
    tab3.setAttribute("class", "active");
    break;
  }
}

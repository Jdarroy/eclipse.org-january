$(document).ready(function(){


$('#daw').hide();
$('#gda').hide();
$('#ibm').hide();
$('#nav').hide();


var $ongletItems = $(".onglets a");

$ongletItems.click(function(){
  $ongletItems.removeClass("active");
  $(this).addClass("active");

  var dest = $(this).attr('href');

  if (dest == "#daw"){
    $('#gda').hide();
    $('#ibm').hide();
    $('#nav').hide();
    $('#daw').show();
  }

  if (dest == "#gda"){
    $('#gda').show();
    $('#ibm').hide();
    $('#nav').hide();
    $('#daw').hide();
  }

  if (dest == "#ibm"){
    $('#gda').hide();
    $('#ibm').show();
    $('#nav').hide();
    $('#daw').hide();
  }

  if (dest == "#nav"){
    $('#gda').hide();
    $('#ibm').hide();
    $('#nav').show();
    $('#daw').hide();
  }

});

});

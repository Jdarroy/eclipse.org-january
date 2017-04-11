$(document).ready(function(){

$('#int').hide();
$('#daw').hide();
$('#gda').hide();
$('#ibm').hide();
$('#nav').hide();


var $ongletItems = $("#test a");

$ongletItems.click(function(){
  $ongletItems.removeClass("active");
  $(this).addClass("active");

  var dest = $(this).attr('href');

  if (dest == "#daw"){
    $('#gda').hide('slow','linear');
    $('#ibm').hide('slow','linear');
    $('#nav').hide('slow','linear');
    $('#daw').show('slow','linear');
    $('#int').hide('slow','linear');
  }

  if (dest == "#gda"){
    $('#gda').show('slow','linear');
    $('#ibm').hide('slow','linear');
    $('#nav').hide('slow','linear');
    $('#daw').hide('slow','linear');
    $('#int').hide('slow','linear');
  }

  if (dest == "#ibm"){
    $('#gda').hide('slow','linear');
    $('#ibm').show('slow','linear');
    $('#nav').hide('slow','linear');
    $('#daw').hide('slow','linear');
    $('#int').hide('slow','linear');
  }

  if (dest == "#nav"){
    $('#gda').hide('slow','linear');
    $('#ibm').hide('slow','linear');
    $('#nav').show('slow','linear');
    $('#daw').hide('slow','linear');
    $('#int').hide('slow','linear');
  }

  if (dest == "#int"){
    $('#gda').hide('slow','linear');
    $('#ibm').hide('slow','linear');
    $('#nav').hide('slow','linear');
    $('#daw').hide('slow','linear');
    $('#int').show('slow','linear');
  }

});

});

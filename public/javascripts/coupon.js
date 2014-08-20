
function PrintElem(elem)
{
    Popup($(elem).html());
}

function Popup(data) 
{
    var mywindow = window.open('', 'my div', 'height=400,width=600');
    mywindow.document.write('<html><head><title>my div</title>');
    /*optional stylesheet*/ //
    mywindow.document.write('<link rel="stylesheet" href="stylesheets/print.css" type="text/css" media="print" />');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');

    mywindow.print();
    mywindow.close();

    return true;
}



$(document).ready(function() {

  /*******  traker ***************/

  // print
  $("body").delegate('.launch-coupon-print', 'click', function() {
    datas = $(this).data()
    console.log("in priiiiint")
    $.post(datas['url'], {"coupon_id" : datas['coupon']});
  });
  
  // view (click coupon)
  $("body").delegate('.launch-coupon-view', 'click', function() {
    datas = $(this).data()
    console.log("in viewwwww")
    $.post(datas['url'], {"coupon_id" : datas['coupon']});


    /******* change color to fly of coupon *********/
    bg_color = $('#print .title').data('bg-color');
    console.log(bg_color.indexOf("#"), bg_color);
    $('#print .title').css("background-color", bg_color);

  });

  //imprimer
  $("body").delegate('.action-print', 'click', function() {
      PrintElem('#coupon-print');
  });


});




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

  // bg_color = $('#print .title').data('bg-color');
  // console.log(bg_color.indexOf("#"));
  // (bg_color.indexOf("#") >= 0) ?  $('#print .title').css("background-color", "#"+bg_color) :  $('#print .title').css("background-color", bg_color) 


  });

  /******* change color to fly of coupon *********/
 



});




$(document).ready(function() {
  $("body").delegate('.launch-coupon-print', 'click', function() {
    datas = $(this).data()
    console.log("in priiiiint")
    $.post(datas['url'], {"coupon_id" : datas['coupon']}
          );
  });
  
  $("body").delegate('.launch-coupon-view', 'click', function() {
    datas = $(this).data()
    console.log("in viewwwww")
    $.post(datas['url'], {"coupon_id" : datas['coupon']}
          );
  });
})

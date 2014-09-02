$(document).ready(function(){
  console.log('should open')
  $('#couverts').modal('show')

  $('.modal-footer .btn').on('click', function(){
    widget_cart = new WidgetCart({
      widget_cart_div: this
    });
    trigger_cart = new TriggerCart(widget_cart);
    trigger_product = new TriggerProduct(widget_cart, trigger_cart);
    trigger_product.add_to_cart($('#couvert-selector'))
    $('#couverts').modal('hide')
  })
});
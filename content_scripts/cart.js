//we are in /checkout

var get = ['name', 'email', 'phone', 'address', 'address2', 'zip', 'city', 'state', 'country',
  'card_type', 'card_number', 'exp_mon', 'exp_yr', 'cvv', 'buy_auto', 'running'];

chrome.storage.sync.get(get, res => {

  //billing and shipping
  $('#order_billing_name').val(res.name);
  $('#order_email').val(res.email);
  $('#order_tel').val(res.phone);
  $('#bo').val(res.address);
  $('#oba3').val(res.address2);
  $('#order_billing_zip').val(res.zip);
  $('#order_billing_city').val(res.city);
  let country = res.country
  $('#order_billing_country').val(country)
  $("#state_label").text(country === 'USA' ? 'state' : 'province');
  $('#order_billing_state').html($('#states-' + country).html())
  $('#order_billing_state').val(res.state);

  $('#credit_card_type').val(res.card_type);
  cc_input = $( "div:contains('number')", ".string", ".required" )[0].nextSibling
  $(cc_input).val(res.card_number)

  $('#credit_card_month').val(res.exp_mon);
  $('#credit_card_year').val(res.exp_yr);

  setTimeout(()=>{
    $('#order_billing_country').change()
  }, 2000)

  cvv_input = $( "label:contains('CVV')", ".string", ".required" )[0].nextSibling
  $(cvv_input).val(res.cvv);

  $('.iCheck-helper')[1].click();

  if(res.buy_auto){
    //warning if buy_auto on this will finish payment
    $('[name="commit"]').click()
  }
  chrome.runtime.sendMessage({type: "off"}, function(res){});

});

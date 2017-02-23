//we are in /checkout

var get = ['name', 'email', 'phone', 'address', 'zip', 'city', 'state', 'country',
  'card_type', 'card_number', 'exp_mon', 'exp_yr', 'cvv'];

chrome.storage.sync.get(get, function(res) {
  console.log(res)
  $('#order_billing_name').val(res.name);
  $('#order_email').val(res.email);
  $('#order_tel').val(res.phone);
  $('#bo').val(res.address);
  $('#order_billing_zip').val(res.zip);
  $('#order_billing_city').val(res.city);
  $('#order_billing_state').val(res.state);
  $('#order_billing_country').val(res.country);
  $('#credit_card_type').val(res.card_type);
  $('#cnb').val(res.card_number);
  $('#credit_card_month').val(res.exp_mon);
  $('#credit_card_year').val(res.exp_yr);
  $('#vval').val(res.cvv);
  $('#order_terms').prop('checked', true);

  chrome.runtime.sendMessage({type: "off"}, function(res){});
});

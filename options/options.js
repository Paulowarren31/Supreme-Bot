function save_options() {
  var img_codes = document.getElementById('img_codes').value.split(',');
  var sizes = document.getElementById('size').value.split(',');
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var zip = document.getElementById('zip').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var country = document.getElementById('country').value;
  var card_type = document.getElementById('card-type').value;
  var card_number = document.getElementById('card-num').value;
  var exp_mon = document.getElementById('exp-mon').value;
  var exp_yr = document.getElementById('exp-yr').value;
  var cvv = document.getElementById('cvv').value;

  var buy_auto = document.getElementById('auto').checked;

  chrome.storage.sync.set({
    img_codes: img_codes,
    working_codes: img_codes,
    sizes: sizes,
    name: name,
    email: email,
    phone: phone,
    address: address,
    zip: zip,
    city: city,
    state: state,
    country: country,
    card_type: card_type,
    card_number: card_number,
    exp_mon: exp_mon,
    exp_yr: exp_yr,
    cvv: cvv,
    buy_auto: buy_auto,
    running: false

  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    img_codes: '',
    sizes: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    state: '',
    country: '',
    card_type: '',
    card_number: '',
    exp_mon: '',
    exp_yr: '',
    cvv: '',
    buy_auto: false,
    running: false

  }, function(items) {
    document.getElementById('img_codes').value = items.img_codes;
    document.getElementById('size').value = items.sizes;
    document.getElementById('name').value = items.name;
    document.getElementById('email').value = items.email;
    document.getElementById('phone').value = items.phone;
    document.getElementById('address').value = items.address;
    document.getElementById('zip').value = items.zip;
    document.getElementById('city').value = items.city;
    document.getElementById('state').value = items.state;
    document.getElementById('country').value = items.country;
    document.getElementById('card-type').value = items.card_type;
    document.getElementById('card-num').value = items.card_number;
    document.getElementById('exp-mon').value = items.exp_mon;
    document.getElementById('exp-yr').value = items.exp_yr;
    document.getElementById('cvv').value = items.cvv;
    document.getElementById('auto').checked = items.buy_auto;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);


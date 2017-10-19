function save_options() {
  var img_codes = document.getElementById('img_codes').value.split(',');
  var sizes = document.getElementById('size').value.split(',');
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var address2 = document.getElementById('address-2').value;
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
    address2: address2,
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

function init() {
  chrome.storage.sync.get({
    img_codes: '',
    sizes: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
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
    document.getElementById('address-2').value = items.address2;
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

    //load json with items

    var request = new XMLHttpRequest()
    request.open('GET', 'http://ec2-35-176-87-154.eu-west-2.compute.amazonaws.com/items.json', true)

    request.onload = function(){
      if (request.status >= 200 && request.status < 400){
        var json = JSON.parse(request.responseText).items
        var latest = JSON.parse(request.responseText).update_time
        $('#lu').text(latest)
        display_items(json)

        //update added items

        code_arr = items.img_codes
        for(code in code_arr){
          code = code_arr[code]
          elt = document.getElementById(code)

          elt.classList.remove('btn-dark')
          elt.classList.add('btn-success')
          elt.innerHTML = 'added'
        }
      }
    }
    request.send()


  });

}

function display_items(items){
  item_list = document.getElementById('item-list')

  for(i in items){
    i = items[i]
    item = document.createElement('li')
    item.classList.add('list-group-item')
    btn = '<button id="'+i.alt+'" type="button" class="btn btn-sm btn-dark float-sm-right">add</button>'
    item.innerHTML = i.title + '\t' + i.color + '\t' + btn

    item_list.appendChild(item)

    btn = document.getElementById(i.alt)
    btn.onclick = function(e) {

      //togggle btn and update item list
      toggleBtn(e.target.id)
    }
  }
}

function toggleBtn(id){
  elt = document.getElementById(id)
  //we just added this, change to blue
  if(hasClass(id, 'btn-dark')){
    elt.classList.remove('btn-dark')
    elt.classList.add('btn-success')
    elt.innerHTML = 'added'

    codes = document.getElementById('img_codes')
    if(codes.value.length == 0) newCodes = id
    else newCodes = codes.value + ',' + id

    codes.value = newCodes

  }
  else{
    elt.classList.remove('btn-success')
    elt.classList.add('btn-dark')
    elt.innerHTML = 'add'

    codes = document.getElementById('img_codes')
    current_items = codes.value.split(',')
    new_items = ''
    for(item in current_items){
      item = current_items[item]
      if(item != id){
        new_items += item + ','
      }
    }

    codes.value = new_items.substring(0, new_items.length - 1) //chop off last ,


  }
}

function hasClass(id, className){
  elt = document.getElementById(id)
  list = elt.classList.value.split(' ')
  return list.indexOf(className) > -1
}

document.addEventListener('DOMContentLoaded', init);
document.getElementById('save').addEventListener('click', save_options);


$(function(){
  jQuery.expr[':'].icontains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
  };

  $('#item-search').bind("propertychange input", function(e){
    item = e.target.value
    $('#item-list > li:not(:icontains('+item+'))').hide();
    $('#item-list > li:icontains('+item+')').show();
  })

  chrome.storage.sync.get('notification', res => {
    if(res.notification == undefined){
      new Noty({
        text: '<div style="text-align: center;"><h3> Good news everyone! </h3> <img style="width: 180px; height: 90px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png"><br>Canadadian users can now checkout.<br><small>sorry it took so long</small></div>',

        callbacks: {
          onClose: function () {
            chrome.storage.sync.set({ notification: false})
          },
        }
      }).show();


    }
  })


})


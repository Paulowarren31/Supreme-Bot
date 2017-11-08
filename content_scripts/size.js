//we are in the item we are looking for

chrome.storage.sync.get(['working_codes', 'sizes'], function(res){

  let no_sizes = $('select option').length == 0

  if (no_sizes){
    $("#add-remove-buttons :input")[0].click();
  }

  else{
    let size_choice = ''
    let select_idx = 0
    let found_size = false
    let size_options = $('select option')

    res.sizes.forEach( (size) => {
      for (let i = 0; i < size_options.length; i++){
        let select_text = $(size_options[i]).text()
        if (!found_size && size == select_text){
          select_idx = i
          size_choice = size
          found_size = true
        }
      }
    })

    if(found_size){
      let select = document.getElementsByTagName('select')[0]
      select.selectedIndex = select_idx
      $("#add-remove-buttons :input")[0].click();
    }
  }

  var add = false;
  $('#cctrl').bind("DOMNodeInserted", (e) => {
    if(add) return
    add = true;
    var img_codes = res.working_codes;
    img_codes.pop();

    chrome.storage.sync.set({
      working_codes: img_codes
    }, function(){

      var type = ''
      if(img_codes.length == 0) type = 'done'
      else type = 'keep_going'

      setTimeout(() => {
        chrome.runtime.sendMessage({type: type});
      }, 200)

    })

  })
});

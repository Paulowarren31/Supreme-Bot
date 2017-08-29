//we are in the item we are looking for

chrome.storage.sync.get(['working_codes', 'sizes'], function(res){

  size_choice = 0
  while($('select option').filter(function(){
    console.log($(this).text())
    return $(this).text() == res.sizes[size_choice]
  }).length == 0){
    if(size_choice == res.sizes.length) break; //found no sizes we chose :(
    size_choice++;
  }


  if(size_choice != res.sizes.length){
    //get val of correct select option
    val = $('select option').filter(function () {
      return $(this).html() == res.sizes[size_choice];
    }).val();


    $("select").val(val).change();
    $("#add-remove-buttons :input")[0].click();
  }
  else if($('#size').attr('type') == 'hidden'){
    $("#add-remove-buttons :input")[0].click();
  }

  var add = false;
  $('#cctrl').bind("DOMNodeInserted", function(e){
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

      setTimeout(function(){
        chrome.runtime.sendMessage({type: type});
      }, 200)

    })

  })
});


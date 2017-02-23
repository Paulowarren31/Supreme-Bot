//we are in the item we are looking for

chrome.storage.sync.get(['working_codes', 'sizes'], function(res){
  console.log(res)


  size_choice = 0
  while($('#size option').filter(function(){
    return $(this).text() == res.sizes[size_choice]
  }).length == 0){
    if(size_choice == res.sizes.length) break; //found no sizes we chose :(
    size_choice++;
  }
  if(size_choice != res.sizes.length){
    $("#add-remove-buttons :input")[0].click();
  }

  //TODO
  //select correct size

  var img_codes = res.working_codes;
  img_codes.pop();

  chrome.storage.sync.set({
    working_codes: img_codes
  }, function(){
    if(img_codes.length == 0){

      setTimeout(function(){
        chrome.runtime.sendMessage({type: "done"});
      }, 150)
    }
    else{
      setTimeout(function(){
        chrome.runtime.sendMessage({type: "keep_going"});
      }, 150)
    }
  })
});


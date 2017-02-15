//we are in the item we are looking for

$("#add-remove-buttons :input")[0].click();
chrome.storage.sync.get('img_codes', function(res){
  var img_codes = res.img_codes;
  img_codes.pop();

  if(img_codes.length == 0){
    setTimeout(function(){
      chrome.runtime.sendMessage({type: "done"});
    }, 100);
  }
  else{
    chrome.storage.sync.set({
      img_codes: img_codes
    }, function(){
      setTimeout(function(){
        chrome.runtime.sendMessage({type: "keep_going"});
      }, 100);
    });
  }
});


//we are in /shop/all
chrome.storage.sync.get('working_codes', function(res){
  var working_codes = res.working_codes;
  console.log(working_codes)
  current_code = working_codes[working_codes.length - 1]

  var url = $('img[alt='+current_code+']').parent().attr("href");
  //if not found on shop
  if(!url){
    //try again after 250ms
    setTimeout(function(){
      chrome.runtime.sendMessage({type: "keep_going"}, function(res){});
    }, 250);
  }
  else chrome.runtime.sendMessage({type: "url", url: url}, function(res){});
})



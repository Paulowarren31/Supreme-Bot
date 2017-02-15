//we are in /shop/all
chrome.storage.sync.get('img_codes', function(res){
  var img_codes = res.img_codes;
  console.log(img_codes[img_codes.length - 1]);
  var url = $('img[alt='+img_codes[img_codes.length-1]+']').parent().attr("href");
  if(!url){
    //try again after 100ms
    setTimeout(function(){
      chrome.runtime.sendMessage({type: "keep_going"}, function(res){});
    }, 100);
  }
  else chrome.runtime.sendMessage({type: "url", url: url}, function(res){});
})



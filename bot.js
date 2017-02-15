//we are in /shop/all
chrome.storage.sync.get('img_codes', function(res){
  var img_codes = res.img_codes;
  console.log(img_codes[img_codes.length - 1]);
  var url = $('img[alt='+img_codes[img_codes.length-1]+']').parent().attr("href");

  chrome.runtime.sendMessage({type: "url", url: url}, function(res){});
})



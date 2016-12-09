chrome.storage.sync.get('img_code', function(res){
  var img_code = res.img_code;
  var url = $('img[alt='+img_code+']').parent().attr("href");
  chrome.runtime.sendMessage({type: "url", url: url}, function(res){});
})



$(function() {

  $("#start-btn").click(function(e) {
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.search();
  })

  chrome.storage.sync.get('img_codes', function(res){
    $('#img_codes').text(res.img_codes);
  });
});

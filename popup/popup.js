$(function() {

  $("#start-btn").click(function(e) {
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.start();
    $('#start-btn').addClass('hidden')
    $('#stop-btn').removeClass('hidden')
  })
  $('#stop-btn').click(function(){
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.start();
    $('#stop-btn').addClass('hidden')
    $('#start-btn').removeClass('hidden')
  })

  chrome.runtime.sendMessage({type: "check"}, function(res){
    if(res.check){ // if running

      $('#start-btn').addClass('hidden')
      $('#stop-btn').removeClass('hidden')
    }
    else{

      $('#stop-btn').addClass('hidden')
      $('#start-btn').removeClass('hidden')
    }
    $('#status').text(res.state)

  });
});

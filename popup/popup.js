$(function() {

  $("#start-wait-btn").click(function(e) {
    check()
    $('#start-wait-btn').addClass('hidden')
    $('#show').removeClass('hidden')
    $('#stop-wait-btn').removeClass('hidden')
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.wait();
  })

  $("#stop-wait-btn").click(function(e) {
    $('#stop-wait-btn').addClass('hidden')
    $('#start-wait-btn').removeClass('hidden')
    $('#show').addClass('hidden')
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.stop_wait();
    check()
  })

  $("#start-btn").click(function(e) {
    $('#start-btn').addClass('hidden')
    $('#stop-btn').removeClass('hidden')
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.run();
  })


  $('#stop-btn').click(function(){
    $('#stop-btn').addClass('hidden')
    $('#start-btn').removeClass('hidden')
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.stop();
  })

  chrome.runtime.onMessage.addListener(function(req, sender, res){
    if(req.type == 'update' && req.time_until != 1){
      $('#time_until').text(req.time_until)
    }
    if(req.type == 'off'){
      $('#stop-btn').addClass('hidden')
      $('#start-btn').removeClass('hidden')
    }

  })

  function check(){
    chrome.runtime.sendMessage({type: "check"}, function(res){
      if(res.waiting){ // if waiting
        $('#start-wait-btn').addClass('hidden')
        $('#stop-wait-btn').removeClass('hidden')
      }
      if(res.running){
        $('#start-btn').addClass('hidden')
        $('#stop-btn').removeClass('hidden')
      }
      $('#status').text(res.state)

      if(res.time_until != -1 && res.waiting){
        $('#time_until').text(res.time_until)
        $('#show').removeClass('hidden')
      }

    });
  }
  check()
});

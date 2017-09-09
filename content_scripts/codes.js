window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    let code = event.data.code
    chrome.runtime.sendMessage({type: "addCode", code: code}, function(res){});
  }
  if (event.data.type && (event.data.type == "INIT")) {
    chrome.runtime.sendMessage({type: "getCodes"}, (r) => {
      let codes = r.codes
      codes.forEach( code => {
        console.log(code)
        $('#add-'+code).hide()
      })
    })
  }
});

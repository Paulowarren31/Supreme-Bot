//we are in the item we are looking for

$("#add-remove-buttons :input")[0].click();
setTimeout(function(){

  chrome.runtime.sendMessage({type: "done"});
}, 100)

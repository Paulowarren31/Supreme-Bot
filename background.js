chrome.runtime.onMessage.addListener(function(r, s, res) {
  if (r.type == "url") {
    goToItem(r.url);
  }
  if (r.type == "keep_going"){
     search();
  }
  if (r.type == "done") {
    goToCheckout();
  }
})

function search() {
  chrome.tabs.create({
    url: "http://www.supremenewyork.com/shop/all"
  }, function(tab) {})
}


function goToItem(url) {
  var bigUrl = "http://www.supremenewyork.com" + url;
  chrome.tabs.create({
    url: bigUrl
  })

}

function goToCheckout() {
  chrome.tabs.create({
    url: "https://www.supremenewyork.com/checkout"
  })
}

var waiting = false;
var running = false;
var current_state = 'press start'

chrome.runtime.onMessage.addListener(function(r, s, res) {
  if (r.type == "check"){
    res({check: running, state: current_state, next_date: nextDay(4)});
  }
  if (r.type == "url") {
    goToItem(r.url);
  }
  if (r.type == "keep_going"){

    search();
  }
  if (r.type == "done") {
    goToCheckout();
  }
  if (r.type == "off") {
    running = false;
  }
})

function search() {
  if(!running) return;
  var url = "http://www.supremenewyork.com/shop/all"
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
  //chrome.tabs.create({
  //  url: "http://www.supremenewyork.com/shop/all"
  //}, function(tab) {})
}


function goToItem(url) {
  if(!running) return;
  var bigUrl = "http://www.supremenewyork.com" + url;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: bigUrl});
  });

}

function goToCheckout() {
  if(!running) return;
  var url = "https://www.supremenewyork.com/checkout"
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  })
}

function start(){
  waiting = true;
  next_drop = nextDay(4)
  today = new Date();
  console.log(next_drop)
  if(today.getDate() == next_drop.getDate()){
  }
}

function nextDay(x){
  var now = new Date();
  now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
  if(now.getDay() == 4){
    if(now.getHours() >= 11){
      now.setDate(now.getDate() + 7)
    }
  }
  now.setHours(10)
  now.setMinutes(0)
  now.setSecond(0)
  now.setMilliseconds(0)
  return now;
}

function run(){
  running = !running
  chrome.storage.sync.get('img_codes', function(res){
    chrome.storage.sync.set({
      working_codes: res.img_codes
    })
  })
  search();
}

running = false
waiting = false
current_state = 'press wait or start'
time_left = -1

worker = new Worker('worker.js')

chrome.runtime.onMessage.addListener(function(r, s, res) {
  if (r.type == "check"){
    res({waiting: waiting, running: running, state: current_state, time_until: time_left});
  }
  if (r.type == "url") {
    goToItem(r.url);
  }
  if (r.type == "keep_going"){
    search();
  }
  if (r.type == "run") {
    run()
    //restart worker
    worker.terminate()
    worker = undefined
    worker = new Worker('worker.js')
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

function wait(){
  current_state = 'waiting...'
  waiting = true

  worker.postMessage({waiting: waiting})

  worker.addEventListener('message', function(msg){
    if(msg.data.type == 'update'){
      time_left = msg.data.seconds_until
      chrome.runtime.sendMessage({time_until: time_left})
    }
    if(msg.data.type == 'done'){
      run();
    }
  })
}

function stop_wait(){
  waiting = false;
  current_state = 'press wait or start'
  time_until = -1

  //restart worker
  worker.terminate()
  worker = undefined
  worker = new Worker('worker.js')
}


function stop(){
  running = false;
  chrome.storage.sync.set({running: false})
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
  now.setSeconds(0)
  now.setMilliseconds(0)
  return now;
}

function run(){
  running = true;
  console.log('running')
  chrome.storage.sync.get('img_codes', function(res){
    chrome.storage.sync.set({
      working_codes: res.img_codes,
      running: true
    })
  })
  search();
}

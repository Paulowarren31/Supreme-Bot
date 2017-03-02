
self.onmessage = function (msg){
  waiting = msg.data.waiting
  next_drop = nextDay(4)
  today = new Date()
  seconds_until = (next_drop.getTime() - today.getTime()) / 1000
  console.log(seconds_until)

  while(waiting && seconds_until > 10){
    today = new Date()
    next_second = (next_drop.getTime() - today.getTime()) / 1000
    next_second = Math.floor(next_second)
    if(next_second != seconds_until){
      seconds_until = next_second
      console.log(seconds_until)
      self.postMessage({type: 'update', seconds_until: seconds_until})
    }

  }
  self.postMessage({type: 'done'})
}

function nextDay(x){
  var now = new Date();
  now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
  if(now.getDay() == 4){
    if(now.getHours() >= 11){ // if we are on a thurs but past drop time
      now.setDate(now.getDate() + 7) // add week
    }
  }
  now.setHours(11)
  now.setMinutes(0)
  now.setSeconds(0)
  now.setMilliseconds(0)
  return now;
}

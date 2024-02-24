var kursor1 = new kursor({
    type: 2,
    removeDefaultCursor: true,
    color: '#ad8b61'
})
function mouseenter () {
    kursor1.hidden()
  }
  function mouseleave () {
    kursor1.hidden(false)
  }
var kursor2 = new kursor({
    el: '.test',
    color: 'rgb(255 255 255 / 8%)',
    type: 2,
  })
// Play around w/ these values
var Settings = {
  Bubble: {
    minSize: 50, //pixels
    maxSize: 150,
    MovementSpeed: {
      min: 2, //seconds
      max: 15
    }
  },
  newBubbleAddSpeed: 300 //miliseconds
}

//No touchy touchy from here.
var Random = {
  nextInt: (min, max) => {
    return Math.floor(Math.random() * max) + min;
  }
}

var bubbleCount = 0;

var addRandomBubble = () => {
  var size = Random.nextInt(Settings.Bubble.minSize, Settings.Bubble.maxSize);
  var screenWidth = $('body').width();
  var position = Random.nextInt(0, screenWidth - size);
  var bubbleSizes = ["xs", "sm", "md", "lg"]
  var bubble = $("<div>").attr({
    'class': `bubble-${bubbleSizes[Random.nextInt(0, bubbleSizes.length)]}`,
  });
  
  var bubbleContainer = $("<div>").attr({
    'class': 'bubble-container',
    id: `bubble-${bubbleCount}`
  }).css({
    left: position
  }).append(bubble);
  
  
  $('#bubbles').append(bubbleContainer);
  var speed = Random.nextInt(Settings.Bubble.MovementSpeed.min, Settings.Bubble.MovementSpeed.max)
  
  $(`#bubble-${bubbleCount}`).animate({
    bottom: $('body').height()
  }, {
    duration: speed * 1000,
    complete: function() {
      $(this).remove();
    }
  });
  bubbleCount++;
  $('#count').text(`Total bubles spawn count: ${bubbleCount}`);
}

setInterval(() => {  addRandomBubble(); }, Settings.newBubbleAddSpeed);

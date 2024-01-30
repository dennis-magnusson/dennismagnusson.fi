var squareSize = 10;
var square = new Path.Rectangle(
  new Point(0, 0),
  new Size(squareSize, squareSize)
);
square.fillColor = "white";
var symbol = new Symbol(square);

// for checking if a point is in the center third of the canvas
function isInCenterThird(point) {
  var thirdWidth = view.size.width / 3;
  var thirdHeight = view.size.height / 3;
  var centerRect = new Rectangle(
    new Point(thirdWidth, thirdHeight),
    new Size(thirdWidth, thirdHeight)
  );
  return centerRect.contains(point);
}

// place symbols at random positions
for (var i = 0; i < 50; i++) {
  var position;
  do {
    position = Point.random() * view.size;
  } while (isInCenterThird(position));
  var instance = symbol.place(position);
  instance.scale(i / 50);
}

var lastMouseMove = 0;
var throttleInterval = 25; // ms

function handleEvent(event) {
  var currentTime = new Date().getTime();

  if (currentTime - lastMouseMove > throttleInterval) {
    lastMouseMove = currentTime;

    project.activeLayer.children.forEach(function (child) {
      var distance = child.position.getDistance(event.point);
      var scaleFactor = 1 + 4 / distance;
      var opacityFactor = 1 / scaleFactor;

      // scale and fade
      child.scale(scaleFactor);
      child.opacity = Math.max(child.opacity * opacityFactor, 0);

      // remove if too big
      if (
        child.bounds.width >= view.size.width / 2 ||
        child.bounds.height >= view.size.height / 2
      ) {
        child.remove();
      }
    });
  }
}

function onMouseMove(event) {
  handleEvent(event);
}

function onMouseDrag(event) {
  handleEvent(event);
}

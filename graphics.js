

function CirclePosition(x,y) {
  this.x = x;
  this.y = y;
}

function DrawHeatMap(finalHeatMap, context) {
  for (var i = 1; i < finalHeatMap.length; i++) {
    DrawCircleAtLocation(context, i, GetHeatMapColor(finalHeatMap[i]),2);
  }
}

function GetHeatMapColor(color) {
  // 0: #ff0000	bright red
  // 1: #ffa07a
  // 2: #ffa500	bright orange
  // 3: #ff5200
  // 4: #ffff00	bright yellow
  // 5: #bfd800
  // 6: #80b200	half yellow, half green
  // 7: #408B00
  // 8: #006400	dark green
  // 9: #006400
  var colors = ["#ff0000","#ffa07a","#ffa500","#ff5200","#ffff00","#bfd800","#80b200","#408b00","#006400","#006400","#006400","#006400"];
  return colors[color];
}

function DrawGameState(thisGameState, context, canvas) {
  ClearCanvas(context, canvas);

  // draw the four players
  DrawCircleAtLocation(context, thisGameState.red_player_location, "red", 1);
  // create an array to track the players locations so we can see if theya re being stacked upon in the same place
  var nextPosition = 0;
  var locationArray = [];
  locationArray.push(thisGameState.red_player_location);

  nextPosition = GetGraphicalPosition(thisGameState.yellow_player_location, locationArray);
  DrawCircleAtLocation(context, thisGameState.yellow_player_location, "yellow", nextPosition);
  locationArray.push(thisGameState.yellow_player_location);

  nextPosition = GetGraphicalPosition(thisGameState.green_player_location, locationArray);
  DrawCircleAtLocation(context, thisGameState.green_player_location, "green", nextPosition);
  locationArray.push(thisGameState.green_player_location);

  nextPosition = GetGraphicalPosition(thisGameState.blue_player_location, locationArray);
  DrawCircleAtLocation(context, thisGameState.blue_player_location, "blue", nextPosition);

  // now draw Mr. X if he is showing
  if (DoesMrXShowThisTurn(thisGameState.turn) == true) {
    DrawCircleAtLocation(context, thisGameState.mrx_location, "black", 1);
  }
}

function GetGraphicalPosition(thisLocation, locationArray) {
  var x = 1;
  for (i = 0; i < locationArray.length; i++) {
    if (thisLocation == locationArray[i]) {
      x++;
    }
  }
  return x;
}

function DrawCircleAtLocation(context, location, color, position) {

  var thisCirclePosition = GetCirclePosition(location);

  var centerX = thisCirclePosition.x;
  var centerY = thisCirclePosition.y;
  var radius = (45 + (position-1) * 15 );

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  //context.fillStyle = 'red';
  //context.fill();
  context.lineWidth = 15;
  context.strokeStyle = color;
  context.stroke();
}

function ClearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

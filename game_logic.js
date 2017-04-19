function GameState() {
  this.turn = 0;

  var player_array = GetPlayerStartingPositions();
  this.red_player_location = player_array[0];
  this.yellow_player_location = player_array[1];
  this.green_player_location = player_array[2];
  this.blue_player_location = player_array[3];

  this.mrx_location = GetmrxStartingPosition();
  this.message = "";
  this.finalHeatMap = [];
}

function DoesMrXShowThisTurn(turn) {
  if (turn == 3 || turn == 8 || turn == 13 || turn == 18 || turn == 22) {
    return true;
  }
  return false;
}
function HowManyTurnsUntilMrXAppears(turn) {
  switch (turn) {
    case 2:
    case 7:
    case 12:
    case 17:
    case 21:
      return 1;
    break;

    case 1:
    case 6:
    case 11:
    case 16:
    case 20:
      return 2;
    break;

    case 5:
    case 10:
    case 15:
    case 19:
      return 3;
    break;

    case 4:
    case 9:
    case 14:
      return 4;
    break;
  }
}

function GameTurn(iRed, iYellow, iGreen, iBlue) {
  this.red_player_location = iRed;
  this.yellow_player_location = iYellow;
  this.green_player_location = iGreen;
  this.blue_player_location = iBlue;
}

function GetPlayerStartingPositions() {
  // this returns a 4-element array
  // I am aware that this is a horrible function but I'm tired an it is 1am in the morning on a weeknight
  var locations = [13,26,29,34,50,53,91,94,103,112,117,123,138,141,155,174];
  var randomNumbers = [];
  var random;

  // player 1
  random = Math.floor((Math.random() * locations.length) + 1);
  randomNumbers.push(random);
  // player 2
  random = Math.floor((Math.random() * locations.length) + 1);
  while (random == randomNumbers[0]) {
    random = Math.floor((Math.random() * locations.length) + 1);
  }
  randomNumbers.push(random);
  // player 3
  random = Math.floor((Math.random() * locations.length) + 1);
  while (random == randomNumbers[0] || random == randomNumbers[1]) {
    random = Math.floor((Math.random() * locations.length) + 1);
  }
  randomNumbers.push(random);
  // player 4
  random = Math.floor((Math.random() * locations.length) + 1);
  while (random == randomNumbers[0] || random == randomNumbers[1] || random == randomNumbers[2]) {
    random = Math.floor((Math.random() * locations.length) + 1);
  }
  randomNumbers.push(random);

  var startingPositions = [];
  startingPositions.push(locations[randomNumbers[0] - 1]);
  startingPositions.push(locations[randomNumbers[1] - 1]);
  startingPositions.push(locations[randomNumbers[2] - 1]);
  startingPositions.push(locations[randomNumbers[3] - 1]);
  return startingPositions;
}

function GetmrxStartingPosition() {
  var locations = [35,45,51,71,78,104,106,127,132,146,166,170,172];
  var random = Math.floor((Math.random() * locations.length) + 1);
  var location = locations[random - 1];
  return location;
}

function IsThisAValidMove(source, destination) {
  var nodes = GetNodeInformation(source);
  for (j = 0; j < nodes.length; j++)
  {
    if (nodes[j][0] == destination && nodes[j][1] != 3) {  // 3 because players cannot take boats
      return true;
    }
  }
  return false;
}

function PlayNextTurn(thisGameState, thisTurn)
{
  // can return 3 values:
  // 0: turn progressed normally
  // 1: the game is over
  // 2: the players made an improper move

  if (thisGameState.turn > 0) {
    // first, figure out if the players made valid moves
    // (this is not needed before the first turn, when the app opens)
    if (IsThisAValidMove(thisGameState.red_player_location, thisTurn.red_player_location) != true) {
      thisGameState.message = "The red player's move is invalid.";
      return 2;
    }
    if (IsThisAValidMove(thisGameState.yellow_player_location, thisTurn.yellow_player_location) != true) {
      thisGameState.message = "The yellow player's move is invalid.";
      return 2;
    }
    if (IsThisAValidMove(thisGameState.green_player_location, thisTurn.green_player_location) != true) {
      thisGameState.message = "The green player's move is invalid.";
      return 2;
    }
    if (IsThisAValidMove(thisGameState.blue_player_location, thisTurn.blue_player_location) != true) {
      thisGameState.message = "The blue player's move is invalid.";
      return 2;
    }

    // the players have made valid moves, so update the game state
    thisGameState.red_player_location = thisTurn.red_player_location;
    thisGameState.yellow_player_location = thisTurn.yellow_player_location;
    thisGameState.green_player_location = thisTurn.green_player_location;
    thisGameState.blue_player_location = thisTurn.blue_player_location;

    // now let's see if they moved on Mr. X
    if (thisGameState.red_player_location == thisGameState.mrx_location) {
      thisGameState.message = "The red player discovered Mr. X at location " + thisGameState.mrx_location + "!";
      return 1;
    }
    if (thisGameState.yellow_player_location == thisGameState.mrx_location) {
      thisGameState.message = "The yellow player discovered Mr. X at location " + thisGameState.mrx_location + "!";
      return 1;
    }
    if (thisGameState.green_player_location == thisGameState.mrx_location) {
      thisGameState.message = "The green player discovered Mr. X at location " + thisGameState.mrx_location + "!";
      return 1;
    }
    if (thisGameState.blue_player_location == thisGameState.mrx_location) {
      thisGameState.message = "The blue player discovered Mr. X at location " + thisGameState.mrx_location + "!";
      return 1;
    }
  }

  thisGameState.turn = thisGameState.turn + 1;

  if (thisGameState.turn >= 22) {
    // if we made it through the player's turns and it is the end of the game, then Mr. X wins
    thisGameState.message = "Mr. X wins!"
    return 2;
  }

  // Time for Mr.X to move.
  var mrx_move = MrXNextMove(thisGameState);

  // check immediately to see if mrx can't move
  if (mrx_move.dead == true) {
    thisGameState.message = "Mr. X can't move anywhere and loses!"
    return 2;
  }

  thisGameState.mrx_location = mrx_move.location;
  thisGameState.finalHeatMap = mrx_move.finalHeatMap;

  var additionalMessage = "";
  // this additional message will tell the location of Mr.X if he is visible, or if not then tell when he will be visible next
  if (DoesMrXShowThisTurn(thisGameState.turn) == true) {
    additionaMessage = " (Moved to location " + thisGameState.mrx_location + ")";
  }
  else {
    additionalMessage = " (Mr.X will appear in " + HowManyTurnsUntilMrXAppears(thisGameState.turn) + " turns)";
  }

  // temp...this shows the mrx location for debug purposes
  // additionalMessage = additionalMessage + " (" + thisGameState.mrx_location + ")";

  // mr.x moved, so give the proper response
    thisGameState.message = "Turn " + thisGameState.turn + ": Mr. X moved via " + mrx_move.transportation + additionalMessage;
    return 0;
}

function MrXMoveObject(loc, trans, dead, finalHeatMap) {
  this.location = loc;
  this.transportation = trans;
  this.dead = dead;
  this.finalHeatMap = finalHeatMap;
}

function MrXNextMove(thisGameState)
{
  // generate the four player's heat maps
  var heatMaps = [];
  heatMaps.push(GenerateDistanceArray(thisGameState.red_player_location));
  heatMaps.push(GenerateDistanceArray(thisGameState.yellow_player_location));
  heatMaps.push(GenerateDistanceArray(thisGameState.green_player_location));
  heatMaps.push(GenerateDistanceArray(thisGameState.blue_player_location));

  // now compare the four heatmaps and combine into one map by taking the lowest value for each
  var fHeatMap = [];
  for (var i = 0; i < 200; i++) {
    var thisNumber = 999;
    for (var j = 0; j < 4; j++) {
      if (heatMaps[j][i] < thisNumber) {
        thisNumber = heatMaps[j][i];
      }
    }
    fHeatMap.push(thisNumber);
  }

  // ok so now we get into the AI
  // pull out only the locations that touch Mr. X from the heat map
  var mrxHeatMap = [];
  // this array will be [a,b] where a is the location and b is the heatmap value

  var nodes = GetNodeInformation(thisGameState.mrx_location);
  for (var i = 0; i < nodes.length; i++) {
    var thismrxHeatMapNode = [nodes[i][0],fHeatMap[nodes[i][0]]];
    mrxHeatMap.push(thismrxHeatMapNode);
  }

  // now find the largest heatmap number
  var heatNumber = 0;
  for (var i = 0; i < mrxHeatMap.length; i++) {
    if (mrxHeatMap[i][1] > heatNumber) {
      heatNumber = mrxHeatMap[i][1];
    }
  }

  var dead = false;
  if (heatNumber == 0) {
    dead = true;
  }

  // now extract all moves that are the heatmap number, but now include a third element for transportation
  var finalHeatMap = [];
  for (var i = 0; i < mrxHeatMap.length; i++) {
    if (mrxHeatMap[i][1] == heatNumber) {
      var thisTransportationType = GetBestTransportationType(thisGameState.mrx_location, mrxHeatMap[i][0]);
      var thisElement = [mrxHeatMap[i][0], mrxHeatMap[i][1], thisTransportationType];
      finalHeatMap.push(thisElement);
    }
  }

  // weed out the remaining possibilities based on transportation type
  var highestTransportationNumber = 0;
  for (var i = 0; i < finalHeatMap.length; i++) {
    if (finalHeatMap[i][1] > highestTransportationNumber) {
      highestTransportationNumber == finalHeatMap[i][1];
    }
  }

  // now make an array of the final heatmap that will be randomized for movement
  var finalFinalHeatmap = [];
  for (var i = 0; i < finalHeatMap.length; i++) {
    if (finalHeatMap[i][2] == highestTransportationNumber) {
      finalFinalHeatmap.push([finalHeatMap[i][0],finalHeatMap[i][1],finalHeatMap[i][2]]);
    }
  }

  // randomly pick a destination from this list
  var random = Math.floor((Math.random() * finalFinalHeatmap.length));

  var mrx_move = new MrXMoveObject(finalFinalHeatmap[random][0], GetTransportationTypeString(finalFinalHeatmap[random][2]), dead, fHeatMap);
  return mrx_move;
}

function GetTransportationTypeString(transNumber) {
  switch(transNumber) {
    case 1:
        return "bus";
        break;
    case 2:
        return "train";
        break;
    case 3:
        return "boat";
        break;
    default:
        return "taxi";
  }
}

function GetBestTransportationType(loc1, loc2) {
  // this method takes two locations and returns the "best transportion type" where boat is best and taxi is worst
  var nodes = GetNodeInformation(loc1);
  var potentialNodes = [];
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i][0] == loc2) {
      potentialNodes.push(nodes[i][0],nodes[i][1]);
    }
  }
  // now get the highest transportation value in the connections that exist
  var transNumber = 0;
  for (var i = 0; i < potentialNodes.length; i++) {
    if (potentialNodes[i][1] > transNumber) {
      transNumber = potentialNodes[i][1];
    }
  }
  return transNumber;
}

function GenerateDistanceArray(location) {
  // this function will return an array with 200 integers.  each integer represents the distance from that
  //    location to the input location

  var DistanceArray = GetEmptyDistanceArray();
  DiscoverNode(location, 0, DistanceArray);

  return DistanceArray;
}

function DiscoverNode(location, distance, DistanceArray) {
  DistanceArray[location] = distance;

  var nodes = GetNodeInformation(location);
  for (var i = 0; i < nodes.length; i++)
  {
    var nextLocation = nodes[i][0];
    if (nextLocation == 137) {

    }
    if (DistanceArray[nextLocation] > distance + 1) {
      DiscoverNode(nextLocation, distance + 1, DistanceArray);
    }
  }

}

function GetEmptyDistanceArray() {
  var DistanceArray = [];
  for (i = 0; i < 200; i++) {
    DistanceArray.push(999);
  }
  return DistanceArray;
}

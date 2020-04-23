var CLOUD_WIDTH = 540;
var CLOUD_HEIGHT = 250;
var CLOUD_X = 110;
var CLOUD_Y = 30;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = CLOUD_HEIGHT-GAP-FONT_GAP-GAP-50
var BAR_WIDTH = 30;
var alfaChanal = 105;



var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
    var maxElement = arr[0]

    for (var i=0; i<arr.length; i++) {
        if (arr[i]>maxElement) {
            maxElement = arr[i];
        }
    }

        return maxElement;
}


window.renderStatistics =function (ctx, players, times) {
    renderCloud(ctx,CLOUD_X+GAP, CLOUD_Y+GAP, 'rgba(0,0,0,0.7)');

    renderCloud(ctx, CLOUD_X, CLOUD_Y , '#ffffff');

    var maxTime = getMaxElement(times);

    for (var playerIndex=0; playerIndex<players.length; playerIndex++) {
        alfaChanal += 40;
        var playerColor = 'rgb(65,' + alfaChanal +', 225)';

        ctx.fillStyle = '#000000';
        ctx.fillText(players[playerIndex], CLOUD_X + GAP + (GAP+TEXT_WIDTH)*playerIndex, CLOUD_Y + CLOUD_HEIGHT-GAP);

        ctx.fillStyle = playerColor;
        ctx.fillRect(CLOUD_X + GAP + (GAP+TEXT_WIDTH)*playerIndex, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, -(BAR_HEIGHT*times[playerIndex])/maxTime);
        ctx.fillStyle = '#000000';
        ctx.fillText(Math.floor(times[playerIndex]),  CLOUD_X + GAP + (GAP+TEXT_WIDTH)*playerIndex, CLOUD_Y +CLOUD_HEIGHT- GAP - FONT_GAP - GAP -(BAR_HEIGHT*times[playerIndex])/maxTime);
    }

}


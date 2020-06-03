'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var INDENT_GAP = 20;
var TEXT_SIZE = 16;
var FONT_GAP = 5;
var BAR_WIDTH = 40;
var INDENT_COLUMN = 50;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = TEXT_SIZE + 'px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + INDENT_GAP, CLOUD_Y + INDENT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + INDENT_GAP, CLOUD_Y + INDENT_GAP + TEXT_SIZE + FONT_GAP);

  var maxTime = getMaxElement(times);

  ctx.textBaseline = 'bottom';

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + INDENT_COLUMN * (i + 1) + BAR_WIDTH * i, CLOUD_Y + CLOUD_HEIGHT - INDENT_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 60%)';
    }

    var columnHeight = ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_SIZE;
    var columnY = CLOUD_Y + CLOUD_HEIGHT - (INDENT_GAP + TEXT_SIZE + FONT_GAP * 2 + columnHeight);
    var columnX = CLOUD_X + INDENT_COLUMN * (i + 1) + BAR_WIDTH * i;

    ctx.fillRect(columnX, columnY, BAR_WIDTH, columnHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), columnX, columnY - FONT_GAP);
  }
};

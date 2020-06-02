'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 40;
var TEXT_WIDTH = 50;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

/*текст*/
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 125, 25);
  ctx.fillText('Список результатов:', 125, 45);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
 /*колонки*/
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X - GAP + TEXT_WIDTH, CLOUD_Y + GAP, barWidth, BAR_HEIGHT);
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  ctx.fillStyle = 'blue';
  ctx.fillRect(210, 80, 40, 150);
  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', 210, 245);

  ctx.fillStyle = 'grey';
  ctx.fillRect(260, 80, 40, 150);
  ctx.fillStyle = '#000';
  ctx.fillText('Катя', 250, 245);

  ctx.fillStyle = 'black';
  ctx.fillRect(310, 80, 40, 150);
  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', 300, 245);

};

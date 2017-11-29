"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(5, 6);
point.setX(9);
console.log(point.getX());
point.draw();

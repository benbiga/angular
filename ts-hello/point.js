"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X : " + this.x + " Y : " + this.y);
    };
    Point.prototype.displayDistance = function (anotherPoint) {
        //...
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("the value of x cannot be negative");
        }
        this.x = value;
    };
    return Point;
}());
exports.Point = Point;

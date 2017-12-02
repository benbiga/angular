"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, isLiked) {
        this.likeCount = likeCount;
        this.isLiked = isLiked;
    }
    LikeComponent.prototype.doLike = function () {
        if (this.isLiked == false) {
            this.likeCount++;
            console.log("This post has been Liked");
        }
        else {
            this.likeCount--;
            console.log("this post has been unliked");
        }
        this.isLiked = !this.isLiked;
    };
    Object.defineProperty(LikeComponent.prototype, "LikeCount", {
        get: function () {
            return this.likeCount;
        },
        set: function (value) {
            this.likeCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "IsLiked", {
        get: function () {
            return this.isLiked;
        },
        set: function (value) {
            this.isLiked = value;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.js.map
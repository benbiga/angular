"use strict";
exports.__esModule = true;
var like_1 = require("./like");
/*let message;
message = "abc";
let andsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
console.log("Ends with C ? " + andsWithC);

/**Arrow Functions

let programmer = function (message: string)
{
    console.log(message);
}

programmer("hello world");

let programmer2 = (message: string) => console.log(message);

programmer2("cc bb");

/**Intefaces

interface Point{
    x: number,
    y:number
}
let drawPoint = (point : Point) =>
{
    console.log("The x is : "+ point.x +" adn the y is : "+point.y);
}

drawPoint({
x:1,
y:2
});*/
var like = new like_1.LikeComponent();
like.LikeCount = 3;
like.IsLiked = false;
like.doLike();

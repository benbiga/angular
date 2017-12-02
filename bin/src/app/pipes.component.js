"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
        this.course = {
            title: "The complete angular course The complete angular course The complete angular course The complete angular course The complete angular course",
            rating: 4.0123,
            students: 30123,
            price: 190.25,
            releaseDate: new Date(2016, 3, 1)
        };
    }
    PipesComponent = __decorate([
        core_1.Component({
            selector: 'pipesData',
            template: "\n    <div class=\"container\">\n        {{course.title | summary : 30| lowercase}}<br/>\n        {{course.rating | number:'1.3'}}<br/>\n        {{course.students | number}}<br/>\n        {{course.price | currency:'DHs'}}<br/>\n        {{course.releaseDate | date:'shortDate'}}<br/>\n    </div>\n    "
        })
    ], PipesComponent);
    return PipesComponent;
}());
exports.PipesComponent = PipesComponent;
//# sourceMappingURL=pipes.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var courses_service_1 = require("./courses.service");
var core_1 = require("@angular/core");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(service) {
        this.title = "List of courses";
        this.isActive = true;
        this.email = "badr@gmail.com";
        this.courses = service.getCourses();
    }
    CoursesComponent.prototype.onDivClicked = function () {
        console.log("Div was clicked");
    };
    CoursesComponent.prototype.onSave = function ($event) {
        console.log("Save button was clicked!");
        this.isActive = !this.isActive;
        $event.stopPropagation();
    };
    CoursesComponent.prototype.onKeyUp = function () {
        console.log("Enter was clicked, value = " + this.email);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n        <div class=\"container\">\n        <h2>{{\"Title : \"+ title}}</h2>\n        <ul *ngFor=\"let course of courses\">\n            <li>\n                {{course}}\n            </li>\n        </ul>\n\n        <br/> \n            <div (click) = \"onDivClicked()\">\n            <button (click)=\"onSave($event)\" class=\"btn btn-primary\" [class.isActive] = \"isActive\" [style.backgroundColor]=\"isActive ? 'red' : 'blue'\">Save</button></div>\n            <input [(ngModel)] = \"email\" (keyup.enter)=\"onKeyUp()\" />\n            </div>\n    \n    "
        }),
        __metadata("design:paramtypes", [courses_service_1.CoursesService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map
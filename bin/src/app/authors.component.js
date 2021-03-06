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
var authors_service_1 = require("./authors.service");
var core_1 = require("@angular/core");
var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(authorsService) {
        this.title = "List of authors";
        this.authors = authorsService.getAuthors();
    }
    AuthorsComponent = __decorate([
        core_1.Component({
            'selector': 'authors',
            'template': "<h2>{{title}}</h2>\n        <ul>\n            <li *ngFor=\"let author of authors\">\n                {{author}}\n            </li>\n        </ul>\n    "
        }),
        __metadata("design:paramtypes", [authors_service_1.AuthosService])
    ], AuthorsComponent);
    return AuthorsComponent;
}());
exports.AuthorsComponent = AuthorsComponent;
//# sourceMappingURL=authors.component.js.map
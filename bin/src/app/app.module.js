"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var titleCase_component_1 = require("./titleCase.component");
var pipes_component_1 = require("./pipes.component");
var authors_component_1 = require("./authors.component");
var authors_service_1 = require("./authors.service");
var courses_service_1 = require("./courses.service");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var courses_component_1 = require("./courses.component");
var app_component_1 = require("./app.component");
var CustomPipe_component_1 = require("./CustomPipe.component");
var like_component_1 = require("./like.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                courses_component_1.CoursesComponent,
                authors_component_1.AuthorsComponent,
                pipes_component_1.PipesComponent,
                CustomPipe_component_1.SummaryPipe,
                like_component_1.LikeComponent,
                titleCase_component_1.titlecase
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [
                courses_service_1.CoursesService,
                authors_service_1.AuthosService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
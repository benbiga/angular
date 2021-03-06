"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var titlecase = /** @class */ (function () {
    function titlecase() {
    }
    titlecase_1 = titlecase;
    titlecase.prototype.transform = function (value) {
        var result;
        if (!value) {
            return null;
        }
        else {
            var splitingResult = value.split("\\s+");
            if (splitingResult) {
                result += titlecase_1.capitalize(splitingResult[0]);
                for (var i = 1; i < splitingResult.length; i++) {
                    if (splitingResult[i] != "of" || splitingResult[i] != "the") {
                        result += titlecase_1.capitalize(splitingResult[i]) + " ";
                    }
                    else {
                        result += splitingResult[i] + " ";
                    }
                }
            }
            return result;
        }
    };
    titlecase.capitalize = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    titlecase = titlecase_1 = __decorate([
        core_1.Pipe({
            name: 'caseTitle'
        })
    ], titlecase);
    return titlecase;
    var titlecase_1;
}());
exports.titlecase = titlecase;
//# sourceMappingURL=titleCase.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SquareComponent = void 0;
var core_1 = require("@angular/core");
var SquareComponent = /** @class */ (function () {
    function SquareComponent() {
    }
    __decorate([
        core_1.Input()
    ], SquareComponent.prototype, "value");
    SquareComponent = __decorate([
        core_1.Component({
            selector: 'app-square',
            templateUrl: './square.component.html',
            styleUrls: ['./square.component.scss']
        })
    ], SquareComponent);
    return SquareComponent;
}());
exports.SquareComponent = SquareComponent;

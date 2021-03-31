"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompteAseuil = void 0;
var compte_1 = require("./compte");
var CompteAseuil = /** @class */ (function (_super) {
    __extends(CompteAseuil, _super);
    function CompteAseuil(numero, solde, seuil) {
        if (seuil === void 0) { seuil = 0; }
        var _this = _super.call(this, numero, solde) || this;
        _this.seuil = seuil;
        return _this;
    }
    CompteAseuil.prototype.getSeuil = function () {
        return this.seuil;
    };
    CompteAseuil.prototype.setSeuil = function (seuil) {
        this.seuil = seuil;
    };
    CompteAseuil.prototype.retirer = function (montant) {
        if (this.getSolde() - montant > this.seuil) {
            //this.setSolde(this.getSolde() - montant)
            _super.prototype.retirer.call(this, montant);
        }
    };
    return CompteAseuil;
}(compte_1.Compte));
exports.CompteAseuil = CompteAseuil;
//# sourceMappingURL=compteAseuil.js.map
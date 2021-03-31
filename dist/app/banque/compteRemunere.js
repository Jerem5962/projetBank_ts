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
exports.CompteRemunere = void 0;
var compte_1 = require("./compte");
var CompteRemunere = /** @class */ (function (_super) {
    __extends(CompteRemunere, _super);
    function CompteRemunere(numero, solde, taux) {
        var _this = _super.call(this, numero, solde) || this;
        _this.taux = taux;
        return _this;
    }
    CompteRemunere.prototype.getTaux = function () {
        return this.taux;
    };
    CompteRemunere.prototype.setTaux = function (taux) {
        this.taux = taux;
    };
    CompteRemunere.prototype.calculerInteret = function () {
        var interet = 0;
        interet = (this.taux * this.getSolde()) / 100;
        return interet;
    };
    CompteRemunere.prototype.verserInteret = function () {
        this.setSolde(this.calculerInteret());
    };
    return CompteRemunere;
}(compte_1.Compte));
exports.CompteRemunere = CompteRemunere;
//# sourceMappingURL=compteRemunere.js.map
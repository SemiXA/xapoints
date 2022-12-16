"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertReward = void 0;
const rewardServices_1 = require("../../model/services/rewardServices");
const studentServices_1 = require("../../model/services/studentServices");
function insertReward(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const studentLogged = yield (0, studentServices_1.findOneStudent)(req.body.senderId);
            if (studentLogged.activa_points_balance >= req.body.pointQty && req.body.pointQty > 0) {
                yield (0, rewardServices_1.insertOneReward)(req.body.senderId, req.body.idRewardedStudent, req.body.pointQty, req.body.sendDescription);
                yield (0, rewardServices_1.lessPointsToStudent)(req.body.senderId, req.body.pointQty);
                res.redirect("/points?puntosEnviados=true&sentrewards=true");
            }
            else {
                res.redirect("/points?puntosEnviados=true&sentrewards=false");
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.insertReward = insertReward;

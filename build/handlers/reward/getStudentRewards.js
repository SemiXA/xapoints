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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentRewards = void 0;
const rewardServices_js_1 = require("../../model/services/rewardServices.js");
const studentServices_js_1 = require("../../model/services/studentServices.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function getStudentRewards(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.session.token;
            const studentIdecoded = jsonwebtoken_1.default.decode(token, { json: true });
            const studentId = studentIdecoded === null || studentIdecoded === void 0 ? void 0 : studentIdecoded.id;
            const studentSentRewards = yield (0, rewardServices_js_1.findRewardsSentFromStudent)(studentId);
            const studentSentRewardsSum = yield (0, rewardServices_js_1.findRewardsSumSentFromStudent)(studentId);
            const studentReceivedRewards = yield (0, rewardServices_js_1.findRewardsReceivedFromStudent)(studentId);
            const studentRewarded = yield (0, rewardServices_js_1.findStudentsRewarded)(studentId);
            const showPointsFromStudent = yield (0, studentServices_js_1.findOneStudent)(studentId);
            const getStudents = yield (0, studentServices_js_1.findAllStudents)();
            const studentLogged = yield (0, studentServices_js_1.findOneStudent)(studentId);
            const sentrewards = req.query.sentrewards;
            const puntosEnviados = req.query.puntosEnviados;
            res.status(200).render("pages/points", {
                studentSentRewards,
                studentSentRewardsSum,
                studentReceivedRewards,
                showPointsFromStudent,
                getStudents,
                studentLogged,
                sentrewards,
                studentRewarded,
                puntosEnviados
            });
        }
        catch (error) {
            console.log(error);
            res.status(404).json({ message: "not found" });
        }
    });
}
exports.getStudentRewards = getStudentRewards;

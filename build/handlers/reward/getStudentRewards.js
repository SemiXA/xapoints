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
exports.getStudentRewards = void 0;
const rewardServices_js_1 = require("../../model/services/rewardServices.js");
const studentServices_js_1 = require("../../model/services/studentServices.js");
function getStudentRewards(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const studentId = "1";
            const studentSentRewards = yield (0, rewardServices_js_1.findRewardsSentFromStudent)(studentId);
            const studentReceivedRewards = yield (0, rewardServices_js_1.findRewardsReceivedFromStudent)(studentId);
            const showPointsFromStudent = yield (0, studentServices_js_1.findOneStudent)(studentId);
            const getStudents = yield (0, studentServices_js_1.findAllStudents)();
            const lastRewards = yield (0, rewardServices_js_1.findRewardsSortedByDate)();
            //const insertStudent = await insertOneUser({"id": 3,"email":"juan@toni.com","password": "12345","role": "Student"},()=>{})
            //console.log(studentSentRewards);
            res.status(200).render("pages/points", { studentSentRewards,
                studentReceivedRewards,
                showPointsFromStudent,
                getStudents,
                lastRewards,
                studentId
            });
        }
        catch (error) {
            res.status(404).json({ "message": "not found" });
        }
    });
}
exports.getStudentRewards = getStudentRewards;

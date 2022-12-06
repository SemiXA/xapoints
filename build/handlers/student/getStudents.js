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
exports.getStudents = void 0;
const studentServices_1 = require("../../model/services/studentServices");
function getStudents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const studentsFound = yield (0, studentServices_1.findAllStudents)();
            return res.status(200).send(studentsFound);
            {
            }
        }
        catch (error) {
            return res.status(404).json({ "message": "not found" });
        }
    });
}
exports.getStudents = getStudents;

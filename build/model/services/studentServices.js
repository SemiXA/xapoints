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
exports.putOneStudent = exports.deleteOneStudent = exports.findOneStudent = exports.findAllStudents = exports.createStudent = void 0;
const config_1 = require("../../config");
const promise_1 = __importDefault(require("mysql2/promise"));
const config_2 = require("../../config");
function createStudent(student, callback) {
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, id_user, prom ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    config_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, student.iduser, student.prom], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
exports.createStudent = createStudent;
;
function findAllStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
        const connection = yield promise_1.default.createConnection(config_2.connectionData);
        const result = yield connection.execute(queryString);
        return result[0];
    });
}
exports.findAllStudents = findAllStudents;
function findOneStudent(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, prom, activa_points_balance FROM student WHERE id = ?";
        const connection = yield promise_1.default.createConnection(config_2.connectionData);
        const result = yield connection.execute(queryString, [IDUser]);
        return result[0][0];
    });
}
exports.findOneStudent = findOneStudent;
function deleteOneStudent(id, callback) {
    const queryString = "DELETE FROM student WHERE id = ?";
    config_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentDeleted = "deleted successfully";
        callback(null, studentDeleted);
    });
}
exports.deleteOneStudent = deleteOneStudent;
function putOneStudent(id, student, callback) {
    const queryString = "UPDATE student SET name=?, first_surname=?, second_surname=?, email_personal=?, email_activa=?, phone_number=?, zip_code=? WHERE id=?";
    config_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentUpdated = "update succesfull";
        callback(null, studentUpdated);
    });
}
exports.putOneStudent = putOneStudent;

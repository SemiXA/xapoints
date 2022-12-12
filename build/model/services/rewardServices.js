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
exports.lessPointsToStudent = exports.findRanking = exports.insertOneReward = exports.findRewardsReceivedSortedByDate = exports.findRewardsSentSortedByDate = exports.findStudentsRewarded = exports.findRewardsReceivedFromStudent = exports.findRewardsSumSentFromStudent = exports.findRewardsSentFromStudent = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = require("../../config");
function findRewardsSentFromStudent(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT student.name, reward.description, reward.xp_points, reward.date, reward.id_user_rewarded FROM reward INNER JOIN student ON reward.id_user_sender = student.id_user WHERE  reward.id_user_sender = ? ORDER BY reward.date DESC LIMIT 0,5";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(queryString, [IDUser]);
        return result[0];
    });
}
exports.findRewardsSentFromStudent = findRewardsSentFromStudent;
function findRewardsSumSentFromStudent(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT SUM(reward.xp_points) as sumPoints, student.name, reward.description, reward.date, reward.id_user_rewarded FROM reward INNER JOIN student ON reward.id_user_sender = student.id_user WHERE ? = reward.id_user_sender ORDER BY reward.date DESC LIMIT 0,5";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(queryString, [IDUser]);
        return result[0][0];
    });
}
exports.findRewardsSumSentFromStudent = findRewardsSumSentFromStudent;
function findRewardsReceivedFromStudent(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT SUM(xp_points) as points from reward where id_user_rewarded = ?";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(queryString, [IDUser]);
        return result[0][0];
    });
}
exports.findRewardsReceivedFromStudent = findRewardsReceivedFromStudent;
function findStudentsRewarded(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "select student.name from reward  inner join student on id_user_rewarded = student.id_user where reward.id_user_sender = ? ;";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(queryString, [IDUser]);
        return result[0];
    });
}
exports.findStudentsRewarded = findStudentsRewarded;
function findRewardsSentSortedByDate() {
    return __awaiter(this, void 0, void 0, function* () {
        const querystring = "SELECT student.name, reward.description, reward.xp_points, reward.date, reward.id_user_rewarded FROM reward INNER JOIN student ON reward.id_user_sender = student.id_user ORDER BY reward.date DESC LIMIT 0,5";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(querystring);
        return result[0];
    });
}
exports.findRewardsSentSortedByDate = findRewardsSentSortedByDate;
function findRewardsReceivedSortedByDate() {
    return __awaiter(this, void 0, void 0, function* () {
        const querystring = "SELECT student.name FROM reward INNER JOIN student ON reward.id_user_rewarded = student.id_user ORDER BY reward.date DESC LIMIT 0,5";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(querystring);
        return result[0];
    });
}
exports.findRewardsReceivedSortedByDate = findRewardsReceivedSortedByDate;
function insertOneReward(IDUserSender, IDUserRewarded, XPpoints, Description) {
    return __awaiter(this, void 0, void 0, function* () {
        const querystring = "insert into reward (id_user_sender, id_user_rewarded, xp_points, description) values (?, ?, ?, ?)";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(querystring, [IDUserSender, IDUserRewarded, XPpoints, Description]);
        return result;
    });
}
exports.insertOneReward = insertOneReward;
function findRanking() {
    return __awaiter(this, void 0, void 0, function* () {
        const querystring = "SELECT SUM(xp_points) as points, student.name, student.id from reward inner join student ON reward.id_user_rewarded = student.id group by student.id order by points DESC";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(querystring);
        return result[0];
    });
}
exports.findRanking = findRanking;
function lessPointsToStudent(id_sender, points) {
    return __awaiter(this, void 0, void 0, function* () {
        const querystring = "UPDATE student set activa_points_balance = activa_points_balance - ? where id_user = ?";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const result = yield connection.execute(querystring, [points, id_sender]);
        return result[0];
    });
}
exports.lessPointsToStudent = lessPointsToStudent;

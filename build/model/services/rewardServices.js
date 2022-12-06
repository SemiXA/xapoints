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
exports.findRewardsReceivedFromStudent = exports.findRewardsSentFromStudent = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = require("../../config");
function findRewardsSentFromStudent(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT SUM(xp_points) as points from reward where id_user_sender = ?";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const rewardsSent = yield connection.execute(queryString, [IDUser]);
        return rewardsSent;
    });
}
exports.findRewardsSentFromStudent = findRewardsSentFromStudent;
function findRewardsReceivedFromStudent(IDUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = "SELECT SUM(xp_points) as points from reward where id_user_rewarded = ?";
        const connection = yield promise_1.default.createConnection(config_1.connectionData);
        const rewardsReceived = yield connection.execute(queryString, [IDUser]);
        return rewardsReceived;
    });
}
exports.findRewardsReceivedFromStudent = findRewardsReceivedFromStudent;

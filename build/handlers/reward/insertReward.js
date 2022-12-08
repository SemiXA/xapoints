"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertReward = void 0;
function insertReward(req, res) {
    try {
        //const insertReward =  await insertOneReward(req.body.); 
        console.log(req.body.getStudents, req.body.sendDescription);
    }
    catch (error) {
        console.log("error");
    }
}
exports.insertReward = insertReward;

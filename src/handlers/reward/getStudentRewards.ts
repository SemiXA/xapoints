import {Reward} from "../../model/types/reward.js";
import express from "express";
import { findRewardsReceivedFromStudent, findRewardsSentFromStudent, findRewardsSortedByDate} from "../../model/services/rewardServices.js";
import { findOneStudent, findAllStudents} from "../../model/services/studentServices.js";
import { insertOneUser } from "../../model/services/userServices.js";
import { User } from "../../model/types/user.js";
import jsonwebtoken from 'jsonwebtoken';




export async function getStudentRewards(req: express.Request, res: express.Response){
    try{
    const token = req.session.token as string;
    const studentIdecoded = jsonwebtoken.decode(token, {json: true});
    const studentId = studentIdecoded?.id;

    const studentSentRewards = await findRewardsSentFromStudent(studentId);
    const studentReceivedRewards = await findRewardsReceivedFromStudent(studentId);
    const showPointsFromStudent = await  findOneStudent(studentId);
    const getStudents = await findAllStudents();
    const lastRewards = await findRewardsSortedByDate();
    
    res.status(200).render("pages/points",
      
        {studentSentRewards,
        studentReceivedRewards,
        showPointsFromStudent,
        getStudents,
        lastRewards,
        studentId
        })
        
        
    } catch (error) {
        res.status(404).json({ "message": "not found" });
    }
}



import {Reward} from "../../model/types/reward";
import express from "express";
import { findRewardsReceivedFromStudent, findRewardsSentFromStudent} from "../../model/services/rewardServices";
import { findOneStudent, findAllStudents} from "../../model/services/studentServices";



export async function getStudentRewards(req: express.Request, res: express.Response){
    try{
    const studentId = "1";
    const studentSentRewards = await findRewardsSentFromStudent(studentId);
    const studentReceivedRewards = await findRewardsReceivedFromStudent(studentId);
    const showPointsFromStudent = await  findOneStudent(studentId);
    const getStudents = await findAllStudents();
    
    res.status(200).render("pages/points",
      
        {studentSentRewards,
        studentReceivedRewards,
        showPointsFromStudent,
        getStudents
        })
        
        
    } catch (error) {
        res.status(404).json({ "message": "not found" });
    }
}



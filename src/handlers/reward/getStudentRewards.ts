import {Reward} from "../../model/types/reward.js";
import express from "express";
import { findRewardsReceivedFromStudent, findRewardsSentFromStudent, findRewardsSortedByDate} from "../../model/services/rewardServices.js";
import { findOneStudent, findAllStudents} from "../../model/services/studentServices.js";
import { insertOneUser } from "../../model/services/userServices.js";
import { User } from "../../model/types/user.js";




export async function getStudentRewards(req: express.Request, res: express.Response){
    try{
    const studentId = "1";
    const studentSentRewards = await findRewardsSentFromStudent(studentId);
    const studentReceivedRewards = await findRewardsReceivedFromStudent(studentId);
    const showPointsFromStudent = await  findOneStudent(studentId);
    const getStudents = await findAllStudents();
    const lastRewards = await findRewardsSortedByDate();
    
    
    
    
    //const insertStudent = await insertOneUser({"id": 3,"email":"juan@toni.com","password": "12345","role": "Student"},()=>{})
    //console.log(studentSentRewards);
    
    
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



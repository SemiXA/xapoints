import { findRanking, findRewardsReceivedSortedByDate, findRewardsSentSortedByDate } from "../../model/services/rewardServices";
import express from 'express';
import jsonwebtoken from "jsonwebtoken";
import { findOneStudent } from "../../model/services/studentServices";



export async function getRankingList(req: express.Request, res: express.Response){
    try {
        const token = req.session.token as string;
        const studentIdecoded = jsonwebtoken.decode(token, { json: true });
        const studentId = studentIdecoded?.id;
        const ranking = await findRanking();
        const studentLogged = await findOneStudent(studentId);
        const lastRewardsSent = await findRewardsSentSortedByDate();
        const lastRewardsReceived = await findRewardsReceivedSortedByDate();
        console.log(lastRewardsSent, lastRewardsReceived, ranking);
        
        
        
        res.status(200).render("pages/ranking",{ranking, studentLogged, lastRewardsSent,lastRewardsReceived});
    } catch (error) {
        res.status(404).json({ "message": "not found" });  
    }
}
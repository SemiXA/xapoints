import { insertOneReward, lessPointsToStudent } from "../../model/services/rewardServices";
import express from 'express';


export async function insertReward(req: express.Request, res: express.Response){
   try {
      
     await insertOneReward(req.body.senderId, req.body.idRewardedStudent, req.body.pointQty, req.body.sendDescription); 
     await lessPointsToStudent(req.body.senderId,req.body.pointQty);

     res.redirect("/points?sentrewards=true");
     
   } catch (error) {
      console.log(error);
        
 }
}

import { insertOneReward } from "../../model/services/rewardServices";
import express from 'express';

export function insertReward(req: express.Request, res: express.Response){
   try {
      //const insertReward =  await insertOneReward(req.body.); 
      console.log(req.body.getStudents, req.body.sendDescription);
      
   } catch (error) {
      console.log("error");
        
 }
}

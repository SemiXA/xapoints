import { insertOneReward, lessPointsToStudent } from "../../model/services/rewardServices";
import express from 'express';
import { getOneStudent } from "../student/getOneStudent";
import { findOneStudent } from "../../model/services/studentServices";


export async function insertReward(req: express.Request, res: express.Response){
   try {
     
     const studentLogged = await findOneStudent(req.body.senderId);
     if(studentLogged.activa_points_balance >= req.body.pointQty && req.body.pointQty > 0){
     
      await insertOneReward(req.body.senderId, req.body.idRewardedStudent, req.body.pointQty, req.body.sendDescription); 
      await lessPointsToStudent(req.body.senderId,req.body.pointQty);

      res.redirect("/points?puntosEnviados=true&sentrewards=true");
     } else {
      res.redirect("/points?puntosEnviados=true&sentrewards=false");
     }
   } catch (error) {
      console.log(error);
        
 }
}

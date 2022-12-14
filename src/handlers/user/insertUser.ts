import express from "express";
import { User } from "../../model/types/user.js";
import { insertOneUser} from "../../model/services/userServices.js";

function insertUser(req: express.Request, res: express.Response){
    const newUser: User = req.body;
    insertOneUser(newUser, (err: Error, userId: number)=>{
      if(err){
        res.status(500).json({"message": err.message});
      } else {
        res.status(200).json({"userId": userId});
      }
      
    });
};

export {insertUser};
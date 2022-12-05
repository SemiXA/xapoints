import { Student } from "../../model/types/student";
import {findAllStudents} from "../../model/services/studentServices";
import express from 'express';


async function getStudents(req: express.Request, res: express.Response){
    try {
        const studentsFound = await findAllStudents();
        return res.status(200).send(studentsFound)
        {
        }
        
     } catch (error) {
        return res.status(404).json({ "message": "not found" }); 
     }
    }

export {getStudents};
import express from 'express';
import {Student} from '../../model/types/student';
import axios from 'axios';



async function getStudentProfile(req: express.Request, res: express.Response){
    

    if (true){
        const targetStudentId: number = 3; //TO-DO: cambiar todo eso para funcionar con el email
        const targetStudent = await axios(`http://localhost:3000/students/${req.body.email}`);
        //TODO const targetStudent: Student = axiosResponse.data;
    
        res.render("pages/studentProfileUpdater", {
            student: targetStudent.data
        });
    } else {
        res.status(401).send("no tienes permisos de acceso");
    }
    
}

export {getStudentProfile};
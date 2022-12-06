import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent";
import {getStudents} from '../handlers/student/getStudents';
import {getOneStudent} from '../handlers/student/getOneStudent';
import {deleteStudent} from '../handlers/student/deleteOneStudent';
import { getStudentProfile } from '../handlers/student/getStudentProfile';
import { updateOneStudent } from '../handlers/student/updateOneStudent';
import { getStudentPoints } from '../handlers/student/getStudentPoints';
import { getStudentRewards } from '../handlers/reward/getStudentRewards';
import { userValidation } from '../handlers/log/logUser';
import { validateToken } from '../utils/validateToken.js';
import { userIsAdmin } from '../utils/userIsAdmin.js';
import { getOneUser } from '../handlers/user/getOneUser';




const router = express.Router();

router.get("/editStudentProfile", getStudentProfile);

router.post("/students",insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.delete("/students/:id_student", validateToken, userIsAdmin ,deleteStudent);

router.put("/students/:id_student", updateOneStudent);



router.post("/logUser", userValidation);

router.get("/users/:user_email", getOneUser);


router.delete("/students", deleteStudent);

router.put("/students/:id_student", updateOneStudent);

router.post("/logUser", userValidation);


router.get("/points", getStudentRewards, getStudents);



export {router};




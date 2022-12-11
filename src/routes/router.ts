import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent";
import {getStudents} from '../handlers/student/getStudents';
import {getOneStudent} from '../handlers/student/getOneStudent';
import {deleteStudent} from '../handlers/student/deleteOneStudent';
import { getStudentProfile } from '../handlers/student/getStudentProfile';
import { updateOneStudent } from '../handlers/student/updateOneStudent';
import { getStudentRewards } from '../handlers/reward/getStudentRewards';
import { userValidation } from '../handlers/log/logUser';
import { validateToken } from '../utils/validateToken.js';
import { userIsAdmin } from '../utils/userIsAdmin.js';
import { getOneUser } from '../handlers/user/getOneUser';
import { insertReward } from '../handlers/reward/insertReward';
import { getRankingList } from '../handlers/reward/getRanking';
import { insertUser } from '../handlers/user/insertUser';
import { userLogout } from '../handlers/user/userLogout';






const router = express.Router();

router.get("/editStudentProfile", getStudentProfile);

router.post("/students",insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.delete("/students/:id_student", validateToken, userIsAdmin ,deleteStudent);

router.put("/students/:id_student", updateOneStudent);



router.post("/logUser", userValidation);

router.get("/users/:user_email", getOneUser);

router.post("/users", insertUser);


router.delete("/students", deleteStudent);

router.put("/students/:id_student", updateOneStudent);

router.post("/logUser", userValidation);


router.get("/points", getStudentRewards, getStudents);

router.post("/sendReward", insertReward);

router.get("/ranking", getRankingList);

router.get("/logout", userLogout)



export {router};




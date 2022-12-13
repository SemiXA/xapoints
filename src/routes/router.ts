import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent";
import {getStudents} from '../handlers/student/getStudents';
import {getOneStudent} from '../handlers/student/getOneStudent';
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


router.post("/students", userIsAdmin, insertStudent);

router.get("/students", userIsAdmin, getStudents);

router.get("/students/:id_student", getOneStudent);


router.put("/students/:id_student", userIsAdmin, updateOneStudent);



router.post("/logUser", userValidation);

router.get("/users/:user_email", getOneUser);

router.post("/users", userIsAdmin, insertUser);


router.put("/students/:id_student", updateOneStudent);

router.post("/logUser", userValidation);


router.get("/points", getStudentRewards);

router.post("/sendReward", insertReward);

router.get("/ranking", getRankingList);

router.get("/logout", userLogout)



export {router};




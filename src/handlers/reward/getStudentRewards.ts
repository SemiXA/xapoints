import express from "express";
import {
  findRewardsReceivedFromStudent,
  findRewardsSentFromStudent,
  findRewardsSentSortedByDate,
  findRewardsSumSentFromStudent,
  findStudentsRewarded,
} from "../../model/services/rewardServices.js";
import {
  findOneStudent,
  findAllStudents,
} from "../../model/services/studentServices.js";
import jsonwebtoken from "jsonwebtoken";


export async function getStudentRewards(
  req: express.Request,
  res: express.Response
) {
  try {
    const token = req.session.token as string;
    const studentIdecoded = jsonwebtoken.decode(token, { json: true });
    const studentId = studentIdecoded?.id;
    
    const studentSentRewards = await findRewardsSentFromStudent(studentId);
    const studentSentRewardsSum = await findRewardsSumSentFromStudent(studentId)
    const studentReceivedRewards = await findRewardsReceivedFromStudent(
      studentId
    );
    const studentRewarded = await findStudentsRewarded(studentId);
    const showPointsFromStudent = await findOneStudent(studentId);
    const getStudents = await findAllStudents();
    const studentLogged = await findOneStudent(studentId);
    const sentrewards = req.query.sentrewards;
    const puntosEnviados = req.query.puntosEnviados;
    
      
    res.status(200).render(
      "pages/points",

      {
        studentSentRewards,
        studentSentRewardsSum,
        studentReceivedRewards,
        showPointsFromStudent,
        getStudents,
        studentLogged,
        sentrewards,
        studentRewarded,
        puntosEnviados
        
      }
    );
  } catch (error) {
    console.log(error);

    res.status(404).json({ message: "not found" });
  }
}

import {OkPacket, RowDataPacket} from "mysql2";
import mysqlPromise from "mysql2/promise";
import { connectionData } from "../../config";




  export async function findRewardsSentFromStudent (IDUser: string){
  
    const queryString = "SELECT SUM(xp_points) as points from reward where id_user_sender = ?";
    const connection = await mysqlPromise.createConnection(connectionData);
    const result = await connection.execute(queryString, [IDUser]);
    return (<RowDataPacket>result)[0][0];
  }

  export async function findRewardsReceivedFromStudent (IDUser: string){
  
    const queryString = "SELECT SUM(xp_points) as points from reward where id_user_rewarded = ?";
    const connection = await mysqlPromise.createConnection(connectionData);
    const result = await connection.execute(queryString, [IDUser]);
    return (<RowDataPacket>result)[0][0];
  }

  export async function findRewardsSortedByDate(){
    const querystring = "SELECT student.name, reward.description, reward.xp_points, reward.date, reward.id_user_rewarded FROM reward INNER JOIN student ON reward.id_user_sender = student.id_user ORDER BY reward.date DESC"
    const connection = await mysqlPromise.createConnection(connectionData);
    const result = await connection.execute(querystring);
    return (<RowDataPacket>result)[0];
  }

  export async function insertOneReward(IDUserSender: number, IDUserRewarded: number, XPpoints: number, Description: string){
    const querystring = "insert into reward (id_user_sender, id_user_rewarded, xp_points, description) values (?, ?, ?, ?)"
    const connection = await mysqlPromise.createConnection(connectionData);
    const result = await connection.execute(querystring, [IDUserSender,IDUserRewarded,XPpoints,Description]);
    return (<RowDataPacket>result)
  }


  export async function findRankingMaxFive(){
    const querystring = "SELECT SUM(xp_points) as points, student.name, student.id from reward inner join student ON reward.id_user_rewarded = student.id group by student.id order by points DESC LIMIT 0,5"
    const connection = await mysqlPromise.createConnection(connectionData);
    const result = await connection.execute(querystring);
    return (<RowDataPacket>result)[0];
  }

  export async function lessPointsToStudent(id_sender:number,points:number){
    const querystring = "UPDATE student set activa_points_balance = activa_points_balance - ? where id_user = ?"
    const connection = await mysqlPromise.createConnection(connectionData);
    const result = await connection.execute(querystring,[points ,id_sender]);
    return (<RowDataPacket>result)[0];
  }




import { User } from "../types/user";
import {RowDataPacket} from "mysql2";
import { db } from "../../config";
import { OkPacket } from "mysql2";
import bcrypt from 'bcrypt';

function findOneUser(user_email: string, callback: Function){
 
    const queryString = "SELECT id, email, password, role FROM user WHERE email = ?";
    db.query(queryString, [user_email], (err, result)=>{
      if(err){ 
        callback(err, null);
      };
      const userFound: User = (<RowDataPacket>result)[0];
      callback(null, userFound);
    })
  };

async function insertOneUser(user: User, callback: Function){
      const queryString = "INSERT INTO user(email, password, role, created_at) VALUES(?, ?, ?, NOW())";
      const hashPassword = await bcrypt.hash(user.password, 10);
      db.query(queryString, [user.email, hashPassword, user.role], (err, result)=>{
        if (err) {
          callback(err, null);
        }
        
        const userId = (<OkPacket> result).insertId;
        callback(null, userId);
      });
}

export {findOneUser, insertOneUser};
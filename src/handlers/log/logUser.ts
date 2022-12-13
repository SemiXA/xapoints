import { User } from "../../model/types/user.js";
import express from 'express';
import axios from "axios";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';


async function userValidation(req: express.Request, res: express.Response){

        const result = await axios.get(`http://localhost:3000/users/${req.body.email}`);
        if (result.data){
            
            const user: User = result.data;
            if (await bcrypt.compare(req.body.password, user.password)){
                const token = jsonwebtoken.sign({"email": user.email, "role": user.role, "id": user.id}, process.env.SESSION_SECRET!)
                req.session.token = token;
                req.session.save(function(err){
                    res.redirect("points");
                })
                
            } else {
                res.render("pages/login", {errorMessage: "El usuario y la contraseña no coinciden"});
            } 
        } else {
            res.render("pages/login", {errorMessage: "404. No existe ese usuario"});
        }
           
}

export {userValidation};
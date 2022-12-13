import express from 'express';
export async function userLogout(req: express.Request, res: express.Response){
     delete req.session.token;
     req.session.destroy(function(err) { 
        res.redirect("/login.html"); 
      })
}


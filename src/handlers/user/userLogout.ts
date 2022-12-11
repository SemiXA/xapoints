import express from 'express';
export function userLogout(req: express.Request, res: express.Response){
    req.session.destroy(function(err) {
        res.redirect("/login.html")
      })
}


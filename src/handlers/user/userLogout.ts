import express from 'express';
export async function userLogout(req: express.Request, res: express.Response){
  console.log(req.session);
     delete req.session.token;
     req.session.destroy(function(err) {
        console.log({err}); 
        
        res.redirect("/login.html");
        
        
      })
}


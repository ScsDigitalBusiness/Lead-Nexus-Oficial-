module.exports = (req,res,next) =>{ 
     res.locals.menssages = req.flash(); 
     res.locals.user = req.session.user; 
    next(); 
}
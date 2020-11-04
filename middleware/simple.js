


const namePrint=(req,res,next)=>{
    var name=req.body;
    console.log(name);
    next();
}

module.exports = namePrint;
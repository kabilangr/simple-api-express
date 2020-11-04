
const router = require('express').Router();
const mysqlConnection=require('../connection');
const namePrint=require('../middleware/simple');

router.use(namePrint);

router.get('/',(req,res)=>{
mysqlConnection.query("SELECT * FROM USERS",(err,rows,fields)=>{
    if(!err)
    res.send(rows);
    else
    res.send(err);
})
});



router.get('/:id',(req,res)=>{
mysqlConnection.query(`SELECT * FROM USERS WHERE ID=${req.params.id}`,(err,rows,fields)=>{
    if(!err)
    res.send(rows);
    else
    res.send(err);
})
});


router.post('/',(req,res)=>{
let user=req.body;
mysqlConnection.query(`INSERT INTO users (name) VALUES (\'${user.name}\')`,(err,rows,fields)=>{
    if(!err)
    res.send(rows);
    else 
    res.send(err);
})
});


router.put('/:id',(req,res)=>{
    let user=req.body;
    let id=req.params.id;
    mysqlConnection.query(`SELECT * FROM USERS WHERE ID=${id}`,(err,rows)=>{
        if(!err)
        {
            mysqlConnection.query(`UPDATE USERS SET NAME=\"${user.name}\" WHERE ID=${id}`,(err,rows)=>{
                if(!err)
                res.send(rows.message);
                else
                res.send(err);
            })
        }
        else
        res.send(err);
    });
});


router.delete('/:id',(req,res)=>{
    mysqlConnection.query(`DELETE FROM USERS WHERE id= ${req.params.id}`,(err,rows)=>{
        if(!err)
        res.send('Deleted');
        else
        res.send(err);
    })
})



module.exports=router;
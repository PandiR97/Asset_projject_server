const connection=require('./db');
const express=require('express');
const router=express.Router;

router.post('/update',(req,res)=>{
    const {
        comments,userid
      } =req.body;

      const query='update insert-asset set comments=? where userid=?';

    connection.query(query,[comments,userid],(err,result)=>{
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ message: 'An error occurred' });
            console.log("500 response")
            return;
          }
          res.status(200).json({ message: 'Updated inserted successfully' });
          console.log("200 response")
    });
});

module.exports=router;
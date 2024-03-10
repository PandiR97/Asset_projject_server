const express=require('express');
const router=express.Router();
const connection=require('./db');

router.delete('/delete',(req,res)=>{
    const {
        userid
      } =req.body;

      const query='delete from assetdata where userid=?';

    connection.query(query,[userid],(err,result)=>{
        if (err) {
            console.error('Error Unlink data:', err);
            res.status(500).json({ message: 'An error occurred' });
            console.log("500 response")
            return;
          }
          res.status(200).json({ message: 'Deleted successfully' });
          console.log("200 response")
    });
});

module.exports = router;
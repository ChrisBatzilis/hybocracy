import * as express from 'express';
import * as _ from 'lodash';
require('./models/member');
export let memberRouter = express.Router();
var mongoose = require('mongoose');
var Members = mongoose.model('Member');

memberRouter.get('/:username', (req, res) =>{
console.log("Attempt to find member "+req.params.username);
Members.find({username:req.params.username},{_id:1,username:1,firstName:1,lastName:1,email:1},
      function(err,member){
         if(err){
           sendJsonResponse(res,500,err);
         }else{
           sendJsonResponse(res,200,member);
         }
    });
  });

memberRouter.put('/:id', (req, res) => {
  console.log('edit member');
  res.json({ });
});

memberRouter.post('/', (req, res) => {
console.log("Attempt to create new member "+req.body.username);
 var payload=req.body;
 Members.create(payload, function(err,member){
    if(err){
      if(err.code==11000){
        sendJsonResponse(res,409,err);
      }else{
       sendJsonResponse(res,400,err);
    }
  }else{
      sendJsonResponse(res,201,member);
      }
 });
});


var sendJsonResponse = function(res,status,content) {
  res.status(status);
  res.json(content);
};

var mongoose= require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var memberSchema = new mongoose.Schema({
  username: {type:String,required: true},
  firstName: {type:String,required:true},
  lastName: {type:String,required:true},
  password: {type:String, required: false},
  email: {type:String,index: { unique: true }}
},{versionKey:false});

memberSchema.plugin(uniqueValidator);

mongoose.model('Member',memberSchema);

var userSchema = new mongoose.Schema({
  firstName: {type:String,required:true},
  lastName: {type:String,required:true},
  password: {type:String, required: false},
  email: {type:String,index: { unique: true }}
},{versionKey:false});

memberSchema.plugin(uniqueValidator);

mongoose.model('User', userSchema);
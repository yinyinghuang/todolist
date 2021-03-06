const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
	username:{
		type:String,
		require:true,
		unique:true
	},
	password:{
		type:String,
		require:true
	}
});

const User = mongoose.model('User',UserSchema);

module.exports = User;
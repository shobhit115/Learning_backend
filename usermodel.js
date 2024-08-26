const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://shobhitsingh26:Shobhit@2468@cluster-1.u0edg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1`);

const userSchema=mongoose.Schema({
    name: String,
    username: String,
    email: String
});

module.exports=mongoose.model("user", userSchema);
const mongoose  = require ("mongoose");

const TolistSchema = new mongoose.Schema({
    text: {
        type : String,
        required : true,
    }
})
// creation of how the schema should be present in the db .
// mongoose.model("todolist",TolistSchema);
// module.exports = Todolist;
// instead of these three line we can use as 

module.exports = mongoose.model("todolist",TolistSchema);
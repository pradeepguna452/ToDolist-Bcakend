const Todolist = require ("../models/TodoModel");
const bodyParser = require ("body-parser");

module.exports.getTodo = async (req,res)=>{
    const todo = await Todolist.find();
    res.send(todo)
}

module.exports.Savetodo = async (req,res)=>{
    const text = req.body
    Todolist.create(text)
    .then((data)=>{
        console.log("data saved in the db..");
        res.send(data);
    })
}

module.exports.Updatetodo = async (req,res)=>{
    const {_id,text} = req.body
    Todolist.findByIdAndUpdate(_id,{text})
    .then(()=>{
        res.send("Updated...");
    })
    .catch((err)=>{
console.log(err);
    })
}

module.exports.Deletetodo = async (req,res)=>{
    const {_id} = req.body
    Todolist.findByIdAndDelete(_id)
    .then(()=>{
        res.send("deleted...")
    })
    .catch((err)=>{
        console.log(err);
            })
}

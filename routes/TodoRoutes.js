const { Router } = require("express");
const {Savetodo,getTodo,Updatetodo,Deletetodo} = require ("../controller/Todocontroller.js")
const router = Router();

router.get("/",getTodo);
router.post("/save",Savetodo);
router.post("/update",Updatetodo);
router.post("/delete",Deletetodo);

module.exports = router ;


const express= require("express")

const {add,getAll,edit,remove} = require("../controllers/contactController")

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

console.log(authMiddleware);
console.log(add);
//add contact
router.post("/",authMiddleware,add);

//get all
router.get("/",authMiddleware,getAll);

//ipdate
router.put("/:id",authMiddleware, edit);


//for delete route
router.delete("/:id",authMiddleware, remove);

module.exports = router;
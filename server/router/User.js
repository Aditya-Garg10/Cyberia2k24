const  {registerTeamUser, registerSoloUser} = require("../controller/User");

const Router = require("express") 




const router = Router();

router.post("/registerTeamUser", registerTeamUser)
router.post("/registerSoloUser", registerSoloUser)



module.exports = router
const  {registerTeamUser} = require("../controller/User");

const Router = require("express") 




const router = Router();

router.post("/registerTeamUser", registerTeamUser)



module.exports = router
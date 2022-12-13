const {Router} = require('express');
const escritosRouter = require('./EscritosRouter.js');


const router = Router();


router.use('/escritos', escritosRouter);



module.exports = router;
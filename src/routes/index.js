const express = require('express');
const router = express.Router();

const rolesRoutes = require('./roles');
const skillsRoutes = require('./skills');
const modulesRoutes = require('./modules');

router.use('/roles', rolesRoutes);
router.use('/skills', skillsRoutes);
router.use('/modules', modulesRoutes);

module.exports = router;

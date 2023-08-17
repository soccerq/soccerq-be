const router = require('express').Router();
const statusRouter = require('../api/status/statusRoute');
const playerRouter = require('../api/player/playerRoute');

router.use('/status', statusRouter);

router.use('/soccerq/players', playerRouter);
// TODO: Implement other routes

module.exports = router;

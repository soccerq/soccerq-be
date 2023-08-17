const router = require('express').Router();
const playerController = require('./playerController');
const { requestBodyValidator, requestParamValidator } = require('../../utils/validator');
const { newPlayerSchema, playerIdSchema } = require('./playerEntities');
const { updatePlayerById } = require('./playerService');

router.post(
  '/',
  requestBodyValidator(newPlayerSchema),
  playerController.addPlayer
);

router.get(
  '/:playerId',
  requestParamValidator(playerIdSchema),
  playerController.getPlayerById
);

router.get(
  '/',
  playerController.getPlayers
);

router.patch(
  '/:playerId',
  requestParamValidator(playerIdSchema),
  requestBodyValidator(updatePlayerById),
  playerController.updatePlayerById
);

router.delete(
  '/:playerId',
  requestParamValidator(playerIdSchema),
  playerController.deletePlayerById
);


module.exports = router;

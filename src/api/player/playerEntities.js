const Joi = require('joi');

const PLAYER_POSITION = {
  GOAL_KEEPER: 'GOAL KEEPER',
  FORWARD: 'FORWARD',
  DEFENDER: 'DEFENDER',
};

const PLAYER_STATUS = {
  AVAILABLE: 'AVAILABLE',
  SOLD: 'SOLD',
  UNSOLD: 'UNSOLD',
};

module.exports.newPlayerSchema = Joi.object({
  name: Joi.string().min(4).max(50).required(),
  position: Joi.string()
    .valid(...Object.values(PLAYER_POSITION))
    .required(),
  basePrice: Joi.number().required(),
});

module.exports.playerIdSchema = Joi.object({
  playerId: Joi.number().required()
});

module.exports.updatePlayerSchema = Joi.object({
  soldPrice: Joi.number().required(),
  status: Joi.string().valid(...Object.values(PLAYER_STATUS)).required(),
  team: Joi.string()
});
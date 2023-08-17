const { AppError } = require('../../utils/errorHandler');
const { HTTP_NOT_FOUND, HTTP_EXPECTATION_FAILED } = require('../../utils/httpStatusCodes');
const soccerQRepo = require('./playerRepo');

exports.addPlayer = async (name, postion, basePrice) => {
  const player = soccerQRepo.addPlayer(name, postion, basePrice);
  if (!player) {
    new AppError('Failed to add new player', HTTP_EXPECTATION_FAILED);
  }

  return;
};

exports.getAllPlayers = async () => {
  return soccerQRepo.getAllPlayers();
};

exports.getPlayerById = async (playerId) => {
  const player = soccerQRepo.getPlayerById(playerId);
  if (!player) {
    new AppError('Player not found', HTTP_NOT_FOUND);
  }
  return player;
};

exports.updatePlayerById = async (soldPrice, status, playerId) => {
  const rowsAffected = soccerQRepo.updatePlayerById(soldPrice, status, playerId);
  if (!rowsAffected) {
    new AppError('Player not found', HTTP_NOT_FOUND);
  }
  return;
};

exports.deletePlayerById = async (playerId) => {
  const rowsAffected = soccerQRepo.deletePlayerById(playerId);
  if (!rowsAffected) {
    new AppError('Player not found', HTTP_NOT_FOUND);
  }
  return;
};
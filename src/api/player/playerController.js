const { HTTP_OK, HTTP_CREATED } = require('../../utils/httpStatusCodes');
const playerService = require('./playerService');

exports.addPlayer = async (req, res) => {
  const {
    name,
    position,
    basePrice
  } = req.body;
  await playerService.addPlayer(name, position, basePrice);
  res.status(HTTP_CREATED).json({ message: 'Added successfully' });
};

exports.getPlayers = async (req, res) => {
  const players = await playerService.getAllPlayers;
  res.status(HTTP_OK).json(players);
};

exports.getPlayerById = async (req, res) => {
  const { playerId } = req.param;
  const player = await playerService.getPlayerById(playerId);
  res.status(HTTP_OK).json(player);
};

exports.updatePlayerById = async (req, res) => {
  const { playerId } = req.param;
  const { soldPrice, status } = req.body;
  await playerService.updatePlayerById(soldPrice, status, playerId);
  res.status(HTTP_OK).json({ message: 'Updated successfully' });
};

exports.deletePlayerById = async (req, res) => {
  const { playerId } = req.param;
  await playerService.deletePlayerById(playerId);
  res.status(HTTP_OK).json({ message: 'Deleted successfully' });
};
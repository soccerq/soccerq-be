const { runQuery } = require('../../utils/dbClient');

exports.addPlayer = async (name, position, basePrice) => {
  const query = `
    INSERT INTO soccerq.player (
      name,
      position,
      base_price
    ) VALUES ($1, $2, $3)
    RETURNING id;
  `;
  const result = await runQuery(query, [name, position, basePrice]);
  return result?.rows[0]?.id || null;
};

exports.getAllPlayers = async () => {
  const query = `
    SELECT
      id,
      name,
      position,
      base_price,
      sold_price,
      status
    FROM soccerq.player;
  `;

  const result = await runQuery(query);
  return result?.rows || {};
};

exports.getPlayerById = async (playerId) => {
  const query = `
    SELECT
      id,
      name,
      position,
      base_price,
      sold_price,
      status
    FROM soccerq.player
    WHERE id = $1;
  `;

  const result = await runQuery(query, [playerId]);
  return result?.rows[0] || null;
};

exports.updatePlayerById = async (soldPrice, status, playerId) => {
  const query = `
    UPDATE soccerq.player SET
      sold_price = $1,
      status = $2
    WHERE id = $3;
  `;

  const { rowCount } = await runQuery(query, [soldPrice, status, playerId]);
  return rowCount;
};

exports.deletePlayerById = async (playerId) => {
  const query = `
    DELETE FROM soccerq.player
    WHERE id = $1;
  `;

  const { rowCount } = await runQuery(query, [playerId]);
  return rowCount;
};
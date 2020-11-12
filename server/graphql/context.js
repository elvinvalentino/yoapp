const jwt = require('jsonwebtoken');
const { PubSub } = require('apollo-server');

const pubsub = new PubSub();

module.exports = ({ req, connection }) => {
  let token;
  if (connection) {
    token = connection.context['Access-Token'];
  } else {
    token = req.header('Access-Token');
  }

  if (token) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      return { user, pubsub }
    } catch (err) {
      return { pubsub }
    }
  }

  return { pubsub };
}
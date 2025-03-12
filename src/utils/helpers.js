const getStatusCode = (message) => {
  const errors = {
    "Insufficient funds": 400,
    "User not found": 404,
  };
  return errors[message] || 500;
};

module.exports = { getStatusCode };
